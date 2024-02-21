import React, { useState, useRef } from "react";
import Title from "../atoms/Title";
import styled from "styled-components";
import Section from "../atoms/Section";
import Button from "../atoms/Button";
import emailjs from "@emailjs/browser";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  @media screen and (max-width: 480px) {
    padding: 0 2%;
  }
`;

const Label = styled.label`
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  color: #333;
  line-height: 1.8;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 10px;
  font-size: 0.8rem;
  font-family: "Poppins";
  font-weight: 100;
  color: #555;
  margin-bottom: 5px;
  background-color: #f7f7f7;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  resize: none;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 10px;
  font-family: "Poppins";
  font-size: 0.8rem;
  font-weight: 100;
  color: #555;
  margin-bottom: 5px;
  background-color: #f7f7f7;
  margin-bottom: 30px;

  &:focus {
    outline: none;
  }
`;

const MessageContainer = styled.div`
  text-align: center;
`;

const ContactForm = () => {
  const [showMessage, setShowMessage] = useState(false);
  const formRef = useRef();

  const clearForm = () => {
    formRef.current.reset();
  };

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_9yhc00s",
        "contact_form",
        formRef.current,
        "e66jBJYpiVPUOc57F"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("New email sent");
        },
        (error) => {
          console.log(error.text);
          console.log("Error - email not sent");
        }
      );

    clearForm();
    setShowMessage(true);
  };

  return (
    <div id="message">
      <Title>
        <h2>Get in touch</h2>
      </Title>
      <hr />
      <Section>
        {showMessage ? (
          <MessageContainer>
            <p>
              Thank you for your message! I will get back to you as soon as
              possible.
            </p>
          </MessageContainer>
        ) : null}
        <Form ref={formRef} onSubmit={sendEmail}>
          <Label>Name</Label>
          <Input type="text" name="user_name" />
          <Label>Email</Label>
          <Input type="email" name="user_email" />
          <Label>Subject</Label>
          <Input type="text" name="subject" />
          <Label>Message</Label>
          <Textarea name="message" rows={10} />
          <Button type="submit" color="#68c3a3" title="Send email" />
        </Form>
      </Section>
    </div>
  );
};

export default ContactForm;
