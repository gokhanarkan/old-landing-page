/*

    This is a Lambda function hosted at AWS that connects with SendGrid API
    and sends me an email from the data collected from the contact form.

*/

const sgMail = require('@sendgrid/mail');

exports.handler = async (event) => {
  
  const data = JSON.parse(event.body);
  
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  
  try {
    
    const msg = {
      to: process.env.TO_EMAIL,
      from: {
        email: process.env.FROM_EMAIL,
        name: process.env.FROM_NAME
      },
      subject: `Message from ${data['email']}`,
      text: data['text'],
      html: `<strong>${data['text']}</strong>`,
    };
    
    return await sgMail.send(msg);
    
  } catch (err) {
    
    return {
      "msg": "Error happened",
    }
    
  }
    
};
