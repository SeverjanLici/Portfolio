import React from 'react'
import {
    Html,
    Head,
    Body,
    Heading,
    Hr,
    Container,
    Preview,
    Text,
    Section
} from '@react-email/components';
import{Tailwind} from '@react-email/tailwind'

type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
  };
export default function ContactFormEmail(
  { message, senderEmail }: ContactFormEmailProps
) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white p-6 borderBlack my-10 px-10 py-10 rounded ">
                <Heading className="leading-tight">New message from your portfolio</Heading>
                <Text className="text-base">{message}</Text>
                <Hr />
                <Text className="text-sm text-gray-500 mt-4">This email was sent from your portfolio contact form {senderEmail}.</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
