// const nodemailer = require("nodemailer");
// const brevoTransport = require("nodemailer-brevo-transport");

// //transport
// const transporter = nodemailer.createTransport(
//   sendGridTransport({
//     auth: {
//       api_key: process.env.API_BREVO,
//     },
//   })
// );

// const sendEmailController = (req, res) => {
//   try {
//     const { name, email, msg } = req.body;

//     //validation
//     if (!name || !email || !msg) {
//       return res.status(500).send({
//         success: false,
//         message: "Please Provide All Fields",
//       });
//     }
//     //email matter
//     transporter.sendMail({
//       to: "codeAwesome83@gmail.com",
//       from: "amitgupta21064@gmail.com",
//       subject: "Regarding Mern Portfolio App",
//       html: `
//         <h5>Detail Information</h5>
//         <ul>
//           <li><p>Name : ${name}</p></li>
//           <li><p>Email : ${email}</p></li>
//           <li><p>Message : ${msg}</p></li>
//         </ul>
//       `,
//     });

//     return res.status(200).send({
//       success: true,
//       message: "Your Message Send Successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send({
//       success: false,
//       message: "Send Email API Error",
//       error,
//     });
//   }
// };

// module.exports = { sendEmailController };


// const nodemailer = require("nodemailer");
// const brevoTransport = require("nodemailer-brevo-transport");

// // Set up the Brevo transporter
// const transporter = nodemailer.createTransport(
//   brevoTransport({
//     auth: {
//       api_key: process.env.API_BREVO, // Use the appropriate environment variable for Brevo
//     },
//   })
// );

// const sendEmailController = async (req, res) => {
//   try {
//     const { name, email, msg } = req.body;

//     // Validation
//     if (!name || !email || !msg) {
//       return res.status(400).send({
//         success: false,
//         message: "Please provide all fields",
//       });
//     }

//     // Email content
//     const emailOptions = {
//       to: "amitgupta321100@gmail.com",
//       from: "amitgupta21064@gmail.com",
//       subject: "Regarding Mern Portfolio App",
//       html: `
//         <h5>Detail Information</h5>
//         <ul>
//           <li><p>Name: ${name}</p></li>
//           <li><p>Email: ${email}</p></li>
//           <li><p>Message: ${msg}</p></li>
//         </ul>
//       `,
//     };

//     // Send the email
//     await transporter.sendMail(emailOptions);

//     return res.status(200).send({
//       success: true,
//       message: "Your message has been sent successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send({
//       success: false,
//       message: "Send Email API Error",
//       error: error.message, // Returning a more specific error message
//     });
//   }
// };

// module.exports = { sendEmailController };









// const nodemailer = require("nodemailer");
// const brevoTransport = require("nodemailer-brevo-transport");

// // Transporter setup for Brevo (formerly Sendinblue)
// const transporter = nodemailer.createTransport(
//   brevoTransport({
//     auth: {
//       api_key: process.env.API_BREVO,  // Ensure you have this set up in your .env file
//     },
//   })
// );

// const sendEmailController = (req, res) => {
//   try {
//     const { name, email, msg } = req.body;

//     // Validate the fields
//     if (!name || !email || !msg) {
//       return res.status(400).send({
//         success: false,
//         message: "Please Provide All Fields",
//       });
//     }

//     // Send email
//     transporter.sendMail(
//       {
//         to: "codeAwesome83@gmail.com",  // Replace this with your own email address
//         from: email,  // The sender's email
//         subject: "Regarding Mern Portfolio App",
//         html: `
//           <h5>Detail Information</h5>
//           <ul>
//             <li><p><strong>Name:</strong> ${name}</p></li>
//             <li><p><strong>Email:</strong> ${email}</p></li>
//             <li><p><strong>Message:</strong> ${msg}</p></li>
//           </ul>
//         `,
//       },
//       (error, info) => {
//         if (error) {
//           console.log("Error occurred:", error);
//           return res.status(500).send({
//             success: false,
//             message: "Error sending email",
//             error: error.message,
//           });
//         }
//         return res.status(200).send({
//           success: true,
//           message: "Your message has been sent successfully",
//         });
//       }
//     );
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send({
//       success: false,
//       message: "Send Email API Error",
//       error,
//     });
//   }
// };

// module.exports = { sendEmailController };








const nodemailer = require("nodemailer");
const brevoTransport = require("nodemailer-brevo-transport");

// Transporter setup for Brevo (formerly Sendinblue)
const transporter = nodemailer.createTransport(
  new brevoTransport({ // Add 'new' here
    auth: {
      api_key: process.env.API_BREVO,  // Ensure you have this set up in your .env file
    },
  })
);

const sendEmailController = (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // Validate the fields
    if (!name || !email || !msg) {
      return res.status(400).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }

    // Send email
    transporter.sendMail(
      {
        to: "codeAwesome83@gmail.com",  // Replace this with your own email address
        from: email,  // The sender's email
        subject: "Regarding Mern Portfolio App",
        html: `
          <h5>Detail Information</h5>
          <ul>
            <li><p><strong>Name:</strong> ${name}</p></li>
            <li><p><strong>Email:</strong> ${email}</p></li>
            <li><p><strong>Message:</strong> ${msg}</p></li>
          </ul>
        `,
      },
      (error, info) => {
        if (error) {
          console.log("Error occurred:", error);
          return res.status(500).send({
            success: false,
            message: "Error sending email",
            error: error.message,
          });
        }
        return res.status(200).send({
          success: true,
          message: "Your message has been sent successfully",
        });
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};

module.exports = { sendEmailController };
