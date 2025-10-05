export const getEmailHtml = (otp: string) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Vetarent Verification Code</title>
      <style>
        /* Mobile responsive adjustments */
        @media screen and (max-width: 620px) {
          .container {
            width: 100% !important;
          }
          .content {
            padding: 20px !important;
          }
          h1 {
            font-size: 20px !important;
          }
          p {
            font-size: 14px !important;
          }
          img {
            max-width: 100% !important;
            height: auto !important;
          }
          .otp {
            font-size: 28px !important;
            letter-spacing: 2px !important;
            word-break: break-word !important;
          }
        }
      </style>
  </head>
  <body style="font-family: Arial, sans-serif; background-color: #f0f4fe; margin: 0; padding: 20px;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
              <td align="center">
                  <table class="container" width="100%" style="max-width:600px; width:100%; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); overflow: hidden; border-collapse: collapse;">
                      
                      <!-- Header -->
                      <tr>
                          <td align="center" style="padding: 20px; background-color: #0D47A1;">
                              <img src="cid:logo-image" alt="Vetarent Logo" style="display:block; max-width:200px; width:100%; height:auto;">
                          </td>
                      </tr>
                      
                      <!-- Main Content -->
                      <tr>
                          <td class="content" style="padding: 40px 30px;">
                              <h1 style="font-size: 24px; color: #333333; margin-top: 0;">Verify Your Email Address</h1>
                              <p style="font-size: 16px; color: #555555; line-height: 1.5;">Thank you for signing up with Vetarent! Please use the following verification code to complete your registration:</p>
                              
                              <!-- OTP Block -->
                              <p class="otp" style="font-size: 36px; font-weight: bold; color: #0D47A1; letter-spacing: 4px; text-align: center; margin: 30px 0; padding: 15px; background-color: #f0f4fe; border-radius: 4px;">
                                  ${otp}
                              </p>
                              
                              <p style="font-size: 16px; color: #555555; line-height: 1.5;">This code will expire in 5 minutes. For your security, please do not share this code with anyone.</p>
                              <p style="font-size: 16px; color: #555555; line-height: 1.5;">If you did not request this, you can safely ignore this email.</p>
                              <p style="font-size: 16px; color: #555555; line-height: 1.5; margin-top: 30px;">Thank you,<br>The Vetarent Team</p>
                          </td>
                      </tr>
                      
                      <!-- Footer -->
                      <tr>
                          <td align="center" style="padding: 20px; background-color: #f3f6fa; font-size: 12px; color: #888888; line-height: 1.5;">
                              <p style="margin:0;">Moehly Vetarent</p>
                              <p style="margin:0;">Copyright &copy; ${new Date().getFullYear()} Unique Moehly Multi Concepts Ltd. All rights reserved.</p>
                          </td>
                      </tr>
                      
                  </table>
              </td>
          </tr>
      </table>
  </body>
  </html>
  `;
};


export const getForgotPasswordEmailHtml = (otp: string) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Vetarent Password Reset Code</title>
      <style>
        /* Mobile responsive adjustments */
        @media screen and (max-width: 620px) {
          .container {
            width: 100% !important;
          }
          .content {
            padding: 20px !important;
          }
          h1 {
            font-size: 20px !important;
          }
          p {
            font-size: 14px !important;
          }
          img {
            max-width: 100% !important;
            height: auto !important;
          }
          .otp {
            font-size: 28px !important;
            letter-spacing: 2px !important;
            word-break: break-word !important;
          }
        }
      </style>
  </head>
  <body style="font-family: Arial, sans-serif; background-color: #f0f4fe; margin: 0; padding: 20px;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
              <td align="center">
                  <table class="container" width="100%" style="max-width:600px; width:100%; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); overflow: hidden; border-collapse: collapse;">
                      
                      <!-- Header -->
                      <tr>
                          <td align="center" style="padding: 20px; background-color: #0D47A1;">
                              <img src="cid:logo-image" alt="Vetarent Logo" style="display:block; max-width:200px; width:100%; height:auto;">
                          </td>
                      </tr>
                      
                      <!-- Main Content -->
                      <tr>
                          <td class="content" style="padding: 40px 30px;">
                              <h1 style="font-size: 24px; color: #333333; margin-top: 0;">Reset Your Password</h1>
                              <p style="font-size: 16px; color: #555555; line-height: 1.5;">We received a request to reset your password. Please use the following code to complete the process:</p>
                              
                              <!-- OTP Block -->
                              <p class="otp" style="font-size: 36px; font-weight: bold; color: #0D47A1; letter-spacing: 4px; text-align: center; margin: 30px 0; padding: 15px; background-color: #f0f4fe; border-radius: 4px;">
                                  ${otp}
                              </p>
                              
                              <p style="font-size: 16px; color: #555555; line-height: 1.5;">This code will expire in 5 minutes. For your security, please do not share this code with anyone.</p>
                              <p style="font-size: 16px; color: #555555; line-height: 1.5;">If you did not request a password reset, you can safely ignore this email.</p>
                              <p style="font-size: 16px; color: #555555; line-height: 1.5; margin-top: 30px;">Thank you,<br>The Vetarent Team</p>
                          </td>
                      </tr>
                      
                      <!-- Footer -->
                      <tr>
                          <td align="center" style="padding: 20px; background-color: #f3f6fa; font-size: 12px; color: #888888; line-height: 1.5;">
                              <p style="margin:0;">Moehly Vetarent</p>
                              <p style="margin:0;">Copyright &copy; ${new Date().getFullYear()} Unique Moehly Multi Concepts Ltd. All rights reserved.</p>
                          </td>
                      </tr>
                      
                  </table>
              </td>
          </tr>
      </table>
  </body>
  </html>
  `;
};

export const getWelcomeEmailHtml = (name: string) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Vetarent</title>
      <style>
        /* Mobile responsive adjustments */
        @media screen and (max-width: 620px) {
          .container {
            width: 100% !important;
          }
          .content {
            padding: 20px !important;
          }
          h1 {
            font-size: 22px !important;
          }
          p {
            font-size: 14px !important;
          }
          img {
            max-width: 100% !important;
            height: auto !important;
          }
          .cta-btn {
            display: block !important;
            width: 100% !important;
            text-align: center !important;
          }
        }
      </style>
  </head>
  <body style="font-family: Arial, sans-serif; background-color: #f0f4fe; margin: 0; padding: 20px;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
              <td align="center">
                  <table class="container" width="100%" style="max-width:600px; width:100%; background-color: #ffffff; border-radius: 10px; box-shadow: 0 6px 12px rgba(0,0,0,0.08); overflow: hidden; border-collapse: collapse;">
                      
                      <!-- Header -->
                      <tr>
                          <td align="center" style="padding: 30px; background-color: #0D47A1;">
                              <img src="cid:logo-image" alt="Vetarent Logo" style="display: block; margin-bottom: 10px; max-width: 180px; width: 100%; height: auto;">
                              <h2 style="color: #ffffff; margin: 0; font-weight: normal; font-size: 16px; line-height: 1.4;">
                                Your trusted partner for more intelligent renting and letting solutions.
                              </h2>
                          </td>
                      </tr>

                      <!-- Main Content -->
                      <tr>
                          <td class="content" align="center" style="padding: 40px 30px;">
                              <h1 style="color: #0D47A1; margin-bottom: 20px; font-size: 26px;">Welcome to Vetarent, ${name}!</h1>
                              <p style="color: #444; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
                                We're thrilled to have you on board. Vetarent helps tenants and landlords connect seamlessly with smart, modern tools that make renting simple, transparent, and stress-free.
                              </p>
                              <p style="color: #444; font-size: 15px; line-height: 1.6; margin-bottom: 35px;">
                                From managing rental properties to ensuring secure payments and smooth communication, 
                                Vetarent gives you the confidence and convenience you deserve.
                              </p>

                              <!-- CTA Button -->
                              <a href="https://trust-rent-ng.vercel.app/login" 
                                 class="cta-btn"
                                 style="display: inline-block; max-width: 50%; padding: 14px 28px; background-color: #0D47A1; color: #ffffff; font-size: 16px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                                 Get Started
                              </a>
                          </td>
                      </tr>

                      <!-- Footer -->
                      <tr>
                          <td align="center" style="padding: 25px; background-color: #f3f6fa; font-size: 12px; color: #888888; line-height: 1.5;">
                              <p style="margin:0;">Moehly Vetarent</p>
                              <p style="margin:0;">Copyright &copy; ${new Date().getFullYear()} Unique Moehly Multi Concepts Ltd. All rights reserved.</p>
                              <p style="margin: 8px 0 0 0;">
                                <a href="https://trust-rent-ng.vercel.app" style="color: #0D47A1; text-decoration: none;">Visit our website</a> | 
                                <a href="mailto:vetarent@moehly.ng " style="color: #0D47A1; text-decoration: none;">Contact Support</a>
                              </p>
                          </td>
                      </tr>

                  </table>
              </td>
          </tr>
      </table>
  </body>
  </html>
  `;
};


export function getContactFormEmailHtml(
  name: string,
  email: string,
  phone: string,
  subject: string,
  message: string
): string {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
      /* Responsive layout for mobile clients */
      @media screen and (max-width: 620px) {
        .container {
          width: 100% !important;
          margin: 0 auto !important;
          border-radius: 0 !important;
        }
        .content {
          padding: 20px !important;
        }
        .logo img {
          max-width: 120px !important;
        }
        td, p, a {
          font-size: 15px !important;
        }
      }
    </style>
  </head>
  <body style="margin:0; padding:0; background-color:#f0f4fe; font-family: Arial, sans-serif; text-align:center;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#f0f4fe; padding:20px 0;">
      <tr>
        <td align="center">
          <table class="container" width="100%" style="max-width:600px; width:100%; background-color:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 6px 12px rgba(0,0,0,0.08); text-align:left; margin:0 auto;">

            <!-- Header -->
            <tr>
              <td align="center" class="logo" style="background-color:#0D47A1; padding:25px;">
                <img src="cid:logo-image" alt="Vetarent Logo" style="display:block; margin-bottom:10px; max-width:160px; width:100%; height:auto;">
                <h2 style="color:#ffffff; margin:0; font-weight:normal;">New Contact Form Submission</h2>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td class="content" style="padding:30px;">
                <p style="color:#444; font-size:16px; margin-bottom:25px; text-align:center;">
                  A new message has been submitted via the Vetarent website contact form.
                </p>

                <table width="100%" border="0" cellspacing="0" cellpadding="10" style="border-collapse:collapse; font-size:15px; color:#333;">
                  <tr style="background-color:#f9f9f9;">
                    <td style="font-weight:bold; width:120px;">Name:</td>
                    <td>${name}</td>
                  </tr>
                  <tr>
                    <td style="font-weight:bold;">Email:</td>
                    <td><a href="mailto:${email}" style="color:#0D47A1; text-decoration:none;">${email}</a></td>
                  </tr>
                  <tr style="background-color:#f9f9f9;">
                    <td style="font-weight:bold;">Phone:</td>
                    <td>${phone}</td>
                  </tr>
                  <tr>
                    <td style="font-weight:bold;">Subject:</td>
                    <td>${subject}</td>
                  </tr>
                  <tr style="background-color:#f9f9f9; vertical-align:top;">
                    <td style="font-weight:bold;">Message:</td>
                    <td style="white-space:pre-line;">${message}</td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="background-color:#f3f6fa; padding:25px; font-size:12px; color:#888888; line-height:1.5;">
                <p style="margin:0;">Moehly Vetarent</p>
                <p style="margin:0;">&copy; ${new Date().getFullYear()} Unique Moehly Multi Concepts Ltd. All rights reserved.</p>
                <p style="margin:8px 0 0 0;">
                  <a href="https://trust-rent-ng.vercel.app" style="color:#0D47A1; text-decoration:none;">Visit our website</a> | 
                  <a href="mailto:vetarent@moehly.ng" style="color:#0D47A1; text-decoration:none;">Contact Support</a>
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}
