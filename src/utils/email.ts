export const getEmailHtml = (otp: string) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Vetarent Verification Code</title>
  </head>
  <body style="font-family: Arial, sans-serif; background-color: #f0f4fe; margin: 0; padding: 20px;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
              <td align="center">
                  <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); overflow: hidden;">
                      <tr>
                          <td align="center" style="padding: 20px; background-color: #0D47A1;">
                              <img src="cid:logo-image" alt="Vetarent Logo" width="200">
                          </td>
                      </tr>
                      <tr>
                          <td style="padding: 40px 30px;">
                              <h1 style="font-size: 24px; color: #333333; margin-top: 0;">Verify Your Email Address</h1>
                              <p style="font-size: 16px; color: #555555; line-height: 1.5;">Thank you for signing up with Vetarent. Please use the following verification code to complete your registration:</p>
                              <p style="font-size: 36px; font-weight: bold; color: #0D47A1; letter-spacing: 4px; text-align: center; margin: 30px 0; padding: 15px; background-color: #f0f4fe; border-radius: 4px;">
                                  ${otp}
                              </p>
                              <p style="font-size: 16px; color: #555555; line-height: 1.5;">This code will expire in 5 minutes. For your security, please do not share this code with anyone.</p>
                              <p style="font-size: 16px; color: #555555; line-height: 1.5;">If you did not request this, you can safely ignore this email.</p>
                              <p style="font-size: 16px; color: #555555; line-height: 1.5; margin-top: 30px;">Thanks,<br>The Vetarent Team</p>
                          </td>
                      </tr>
                      <tr>
                          <td align="center" style="padding: 20px; background-color: #f3f6fa; font-size: 12px; color: #888888;">
                              <p>&copy; ${new Date().getFullYear()} Vetarent. All rights reserved.</p>
                              <p>Vetarent Technologies, Lagos, Nigeria</p>
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
  </head>
  <body style="font-family: Arial, sans-serif; background-color: #f0f4fe; margin: 0; padding: 20px;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
              <td align="center">
                  <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); overflow: hidden;">
                      <tr>
                          <td align="center" style="padding: 20px; background-color: #0D47A1;">
                              <img src="cid:logo-image" alt="Vetarent Logo" width="200">
                          </td>
                      </tr>
                      <tr>
                          <td style="padding: 40px 30px;">
                              <h1 style="font-size: 24px; color: #333333; margin-top: 0;">Reset Your Password</h1>
                              <p style="font-size: 16px; color: #555555; line-height: 1.5;">We received a request to reset your password. Please use the following code to complete the process:</p>
                              <p style="font-size: 36px; font-weight: bold; color: #0D47A1; letter-spacing: 4px; text-align: center; margin: 30px 0; padding: 15px; background-color: #f0f4fe; border-radius: 4px;">
                                  ${otp}
                              </p>
                              <p style="font-size: 16px; color: #555555; line-height: 1.5;">This code will expire in 5 minutes. For your security, please do not share this code with anyone.</p>
                              <p style="font-size: 16px; color: #555555; line-height: 1.5;">If you did not request a password reset, you can safely ignore this email.</p>
                              <p style="font-size: 16px; color: #555555; line-height: 1.5; margin-top: 30px;">Thanks,<br>The Vetarent Team</p>
                          </td>
                      </tr>
                      <tr>
                          <td align="center" style="padding: 20px; background-color: #f3f6fa; font-size: 12px; color: #888888;">
                              <p>&copy; ${new Date().getFullYear()} Vetarent. All rights reserved.</p>
                              <p>Vetarent Technologies, Lagos, Nigeria</p>
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
  </head>
  <body style="font-family: Arial, sans-serif; background-color: #f0f4fe; margin: 0; padding: 30px;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
              <td align="center">
                  <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 10px; box-shadow: 0 6px 12px rgba(0,0,0,0.08); overflow: hidden;">
                      
                      <!-- Header -->
                      <tr>
                          <td align="center" style="padding: 30px; background-color: #0D47A1;">
                              <img src="cid:logo-image" alt="Vetarent Logo" width="180" style="display: block; margin-bottom: 10px;">
                              <h2 style="color: #ffffff; margin: 0; font-weight: normal;">Your trusted partner for smarter renting and letting.</h2>
                          </td>
                      </tr>

                      <!-- Main Content -->
                      <tr>
                          <td align="center" style="padding: 40px 30px;">
                              <h1 style="color: #0D47A1; margin-bottom: 20px;">Welcome to Vetarent, ${name}!</h1>
                              <p style="color: #444; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
                                We're thrilled to have you on board. Vetarent helps tenants and landlords connect seamlessly with smart, modern tools that make renting simple, transparent, and stress-free.
                              </p>
                              <p style="color: #444; font-size: 15px; line-height: 1.6; margin-bottom: 35px;">
                                From managing rental properties to ensuring secure payments and smooth communication, 
                                Vetarent gives you the confidence and convenience you deserve.
                              </p>

                              <!-- CTA Button -->
                              <a href="https://trust-rent-ng.vercel.app/login" 
                                 style="display: inline-block; padding: 14px 28px; background-color: #0D47A1; color: #ffffff; font-size: 16px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                                 Get Started
                              </a>
                          </td>
                      </tr>

                      <!-- Footer -->
                      <tr>
                          <td align="center" style="padding: 25px; background-color: #f3f6fa; font-size: 12px; color: #888888; line-height: 1.5;">
                              <p style="margin: 0 0 5px 0;">&copy; ${new Date().getFullYear()} Vetarent. All rights reserved.</p>
                              <p style="margin: 0;">Vetarent Technologies, Lagos, Nigeria</p>
                              <p style="margin: 8px 0 0 0;">
                                <a href="https://vetarent.com" style="color: #0D47A1; text-decoration: none;">Visit our website</a> | 
                                <a href="mailto:support@vetarent.com" style="color: #0D47A1; text-decoration: none;">Contact Support</a>
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

