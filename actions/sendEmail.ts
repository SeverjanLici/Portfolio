"use server"
import React from "react";
import { Resend } from "resend";
import { validateString } from "../lib/utils";
import ContactFormEmail from "@/email/contactForm";
const resend= new Resend(process.env.RESEND_API_KEY);




export const sendEmail = async (formData: FormData) => {
    const senderEmail=formData.get('Sender email')
    const message=formData.get('message')

    if(!validateString(senderEmail,500)){
        throw new Error('Invalid sender email');
    }
    if(!validateString(message,5000)){
        throw new Error('Invalid message');
    }
    try{
        await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: 'severjanliciwork@gmail.com',
        subject: 'New message from your portfolio',
        replyTo: senderEmail as string,
        react: React.createElement(ContactFormEmail, {
            message: message as string,
            senderEmail: senderEmail as string
        })
    })
    }catch(error){
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
}