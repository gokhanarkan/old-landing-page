<template>
  <v-app id="form">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn dark v-on="on">Contact Me</v-btn>
      </template>
      <v-card class="card">
        <v-card-title>
          <span class="headline">Send Email</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="name"
                  :error-messages="nameErrors"
                  :counter="20"
                  label="Name"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  label="E-mail"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
              </v-col>
              <v-divider></v-divider>
              <v-col cols="12">
                <v-textarea
                  v-model="message"
                  :error-messages="messageErrors"
                  label="Message"
                  required
                  counter
                  full-width
                  single-line
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Close</v-btn
          >
          <v-btn color="blue darken-1" text @click="sendEmail()">Send</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  import axios from "axios";
  import { validationMixin } from "vuelidate";
  import { required, maxLength, email } from "vuelidate/lib/validators";

  export default {
    mixins: [validationMixin],
    validations: {
      name: { required, maxLength: maxLength(20) },
      email: { required, email },
      message: { required },
    },
    // States
    data: () => ({
      dialog: false,
      name: "",
      email: "",
      message: "",
    }),
    // Form validation
    computed: {
      nameErrors() {
        const errors = [];
        if (!this.$v.name.$dirty) return errors;
        !this.$v.name.maxLength &&
          errors.push("Name must be at most 20 characters long.");
        !this.$v.name.required && errors.push("Name is required.");
        return errors;
      },
      emailErrors() {
        const errors = [];
        if (!this.$v.email.$dirty) return errors;
        !this.$v.email.email && errors.push("Must be valid e-mail");
        !this.$v.email.required && errors.push("E-mail is required.");
        return errors;
      },
      messageErrors() {
        const errors = [];
        if (!this.$v.message.$dirty) return errors;
        !this.$v.message.required && errors.push("Message is required.");
        return errors;
      },
    },
    methods: {
      // Function to send email through serverless lambda function
      async sendEmail() {
        this.$v.$touch();

        if (!this.$v.$error) {
          const name = this.name;
          const email = this.email;
          const message = this.message;

          const data = {
            email: email,
            text: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`,
          };

          const url =
            "https://af6dpfwcne.execute-api.eu-west-2.amazonaws.com/sendEmail";

          let response = "";

          await axios
            .post(url, data)
            .then((res) => (response = res))
            .catch((err) => (response = err));

          try {
            if (response.data[0].statusCode == 202) {
              this.dialog = false;
              alert("Your email sent. Thanks.");
            }
          } catch {
            this.dialog = false;
            alert(
              "There was a problem with sending your email. Please send it manually."
            );
          }
        }
      },

      // Clears the fields.
      clear() {
        this.name = "";
        this.email = "";
        this.message = "";
      },
    },
  };
</script>

<style scoped>
  #form {
    height: 0;
    width: 120px;
    overflow: hidden;
    min-height: 36px !important;
    background-color: #233646;
    border-radius: 5%;
  }
</style>
