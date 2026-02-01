import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const tripLabels: Record<string, string> = {
      general: "General Inquiry",
      "turkey-ottomans-2026":
        "Rise of the Ottomans - Turkey (Aug 2026)",
      "sandy-lanes-cottage": "Sandy Lanes Cottage Resort (Aug 2026)",
      other: "Other / Future Trips",
    };

    const tripLabel =
      tripLabels[data.tripInquiry] ||
      data.tripInquiry ||
      "Not specified";

    // NOTE: With onboarding@resend.dev, you can only send to your Resend account email
    // To send to info@arrahah.com, you need to verify your domain in Resend dashboard
    const { data: emailData, error } = await resend.emails.send({
      from: "Ar Rahah Contact Form <onboarding@resend.dev>",
      to: "danyal.afzal@danmarsolutions.ca", // TODO: Change to info@arrahah.com after domain verification
      replyTo: data.email,
      subject: `New Inquiry: ${tripLabel} - ${data.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 40%;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <a href="mailto:${data.email}">${data.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.dialCode} ${data.phoneNumber}</td>
            </tr>
            ${
              data.address
                ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Address:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.address}</td>
            </tr>
            `
                : ""
            }
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Trip Inquiry:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${tripLabel}</td>
            </tr>
            ${
              data.bestTimeToContact
                ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Best Time to Contact:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.bestTimeToContact}</td>
            </tr>
            `
                : ""
            }
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Marketing Emails:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.receiveMarketingEmails ? "Yes, opted in" : "No"}</td>
            </tr>
          </table>
          
          ${
            data.message
              ? `
          <div style="margin-top: 20px;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <p style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${data.message}</p>
          </div>
          `
              : ""
          }
          
          <p style="color: #888; font-size: 12px; margin-top: 30px;">
            This email was sent from the Ar Rahah website contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email" },
        { status: 500 },
      );
    }

    console.log("Email sent successfully:", emailData);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
