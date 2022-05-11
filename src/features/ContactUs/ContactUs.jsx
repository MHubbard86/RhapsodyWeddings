import React, { useState, useRef } from "react";
import Spinner from "../../components/Loading/Spinner";
import { Form } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";
import emailjs from '@emailjs/browser';
import Confetti from './Confetti';
import ContactUsForm from './ContactUsForm';

const ContactUs = () => {
  const [FormSubmitSuccessful, setFormSubmitSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);
  const [FormDetails, setFormDetails] = useState('');
  const { addToast } = useToasts();
  const isValid = isFormValid();
  const form = useRef();

  function handleEventChange(event) {
    setFormDetails({ ...FormDetails, [event.target.name]: event.target.value });
  }

  const sendEmail = (e) => {
    e.preventDefault();
    if (isValid) {
      sendFeedback();
    } else {
      addToast("Please add required information", { appearance: "warning", autoDismiss: true });
    }
  };

  const sendFeedback = () => {
    setLoading(true);

    const serviceID = 'default_service';
    const templateID = 'template_rty98n8';

    emailjs.sendForm(serviceID, templateID, form.current, "user_NTkWkBUvl1LeIrJnVBzV3")
      .then((res) => {
        if (res.status === 200) {
          setFormSubmitSuccessful(true);
          setLoading(false);
          addToast("Message sent", { appearance: "info", autoDismiss: true });
        }
      })
      .catch((err) => {
        console.error("Failed to send email. Error: ", err);
        setLoading(false);
        addToast("Something went wrong:" + err, { appearance: "warning", autoDismiss: true });
      });
  };

  function isFormValid() {
    if (
      !FormDetails.Name ||
      !FormDetails.Email || 
      !FormDetails.Phone || 
      !FormDetails.Date ||
      !FormDetails.Venue
    ) {
      return false;
    }
    return true;
  }

  if (FormSubmitSuccessful) return <Confetti />;
  if (loading) return <Spinner />;

  return (
    <Form onSubmit={sendEmail} autoComplete="off" ref={form}>
      <h1>Enquiry Form</h1>
      <ContactUsForm
        FormDetails={FormDetails}
        setFormDetails={setFormDetails}
        handleEventChange={handleEventChange}
      />
    </Form>
  );
};

export default ContactUs;
