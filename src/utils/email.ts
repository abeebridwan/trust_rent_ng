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
                          <td align="center" style="padding: 40px 20px; background-color: #0D47A1;">
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