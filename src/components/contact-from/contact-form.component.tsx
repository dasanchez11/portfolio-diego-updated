import SectionTitle from "../section-title/section-title.component";
import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact-form.component.scss";
import CustomButton from "../../components/custom-button/custom-button.component";

export interface FormState {
  user_name: string;
  user_email: string;
  message: string;
}

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [disable, setDisable] = useState<boolean>(false);
  const [values, setValues] = useState<FormState>({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleUserInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setValues((state) => ({ ...state, [name]: value }));
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valid =
      values.message ||
      ("" && values.user_email) ||
      ("" && values.message) ||
      "";
    if (!valid) {
      window.alert("Form should be completely filled");
      return;
    }
    setDisable(true);
    if (!form.current || disable) return;
    emailjs
      .sendForm(
        "service_njo7mhe",
        "template_554a6ug",
        form.current,
        "5kpcrRauvAEaJGMEg"
      )
      .then(
        (result) => {
          window.alert(`Message Sent successfully`);
          setDisable(false);
        },
        (error) => {
          window.alert(error.text);
          setDisable(false);
        }
      );
  };
  return (
    <div id="contact" className="contact">
      <SectionTitle text="Contact me" />
      <div className="contact__container">
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <div className="contact__title">Send me an email</div>
          <input
            value={values.user_name}
            onChange={handleUserInput}
            placeholder="Name"
            type="text"
            name="user_name"
            className="contact__name-value"
          />
          <input
            value={values.user_email}
            onChange={handleUserInput}
            placeholder="Email"
            type="email"
            name="user_email"
            className="contact__email-value"
          />
          <textarea
            value={values.message}
            onChange={handleUserInput}
            placeholder="Message"
            name="message"
            className="contact__message-value"
            cols={5}
            rows={10}
          />
          <CustomButton
            disabled={disable}
            text="Send Message"
            type="submit"
            buttonType="primary"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
