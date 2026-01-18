import type { NextApiRequest, NextApiResponse } from "next";

type SuccessResponse = {
  success: true;
  message: string;
};

type ErrorResponse = {
  success: false;
  error: string;
};

type Response = SuccessResponse | ErrorResponse;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed. Please use POST.",
    });
  }

  try {
    const { email } = req.body;

    // Validate email
    if (!email || typeof email !== "string") {
      return res.status(400).json({
        success: false,
        error: "Email is required.",
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Invalid email format.",
      });
    }

    // TODO: Implement your account deletion logic here
    // This is where you would:
    // 1. Verify the email exists in your database
    // 2. Send verification email to the user
    // 3. Queue the account for deletion
    // 4. Log the deletion request

    // For now, we'll just log and return success
    console.log(`Account deletion requested for: ${email}`);

    // In production, you might want to:
    // - Send a verification email with a confirmation link
    // - Add the deletion request to a queue
    // - Schedule deletion after 7 days
    // - Send confirmation email when deletion is complete

    return res.status(200).json({
      success: true,
      message: "Account deletion request received. We will process your request within 7 working days and send a confirmation email.",
    });
  } catch (error) {
    console.error("Error processing account deletion:", error);
    return res.status(500).json({
      success: false,
      error: "An error occurred while processing your request. Please try again later.",
    });
  }
}
