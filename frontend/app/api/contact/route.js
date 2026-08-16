import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const body = await request.json();

        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                {
                    success: false,
                    message: "All fields are required",
                },
                { status: 400 }
            );
        }

        // Basic email format check (optional but useful)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid email address",
                },
                { status: 400 }
            );
        }

        // Fail early with a clear message if env vars are missing
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error(
                "Missing EMAIL_USER or EMAIL_PASS in environment variables."
            );

            return NextResponse.json(
                {
                    success: false,
                    message: "Server email configuration is missing.",
                },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Verify the connection before sending (helps catch auth errors clearly)
        await transporter.verify();

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `Portfolio Contact: ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <h2>New Portfolio Message</h2>

                    <p>
                        <strong>Name:</strong> ${name}
                    </p>

                    <p>
                        <strong>Email:</strong> ${email}
                    </p>

                    <p>
                        <strong>Message:</strong>
                    </p>

                    <div style="
                        padding: 15px;
                        background: #f5f5f5;
                        border-radius: 10px;
                    ">
                        ${message}
                    </div>

                    <br />

                    <p>
                        Sent from Ayush Gupta Portfolio.
                    </p>
                </div>
            `,
        });

        return NextResponse.json({
            success: true,
            message: "Message sent successfully!",
        });

    } catch (error) {
        console.error("Email error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to send message",
            },
            { status: 500 }
        );
    }
}