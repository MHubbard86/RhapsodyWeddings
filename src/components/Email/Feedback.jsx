import React, { useState, useRef } from "react";
import Spinner from "../../Spinner";
import { Button, Form, Col } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import DatePicker from "react-datepicker";
import { useToasts } from "react-toast-notifications";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import emailjs from '@emailjs/browser';

const FeedbackForm = () => {
  const [FormSubmitSuccessful, setFormSubmitSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);
  const [FormDetails, setFormDetails] = useState('');
  const { Name, Email, Phone, Date, Venue } = FormDetails;
  const { width, height } = useWindowSize();
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
      (!FormDetails.Email || !FormDetails.Phone) ||
      !FormDetails.Date ||
      !FormDetails.Venue
    ) {
      return false;
    }
    return true;
  }

  if (FormSubmitSuccessful) {
    return (
      <>
        <h2>
          Your message <AiOutlineMail /> was sent and we'll be in touch shortly.
        </h2>
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={250}
        />
      </>
    );
  }

  if (loading) return <Spinner />;

  function resovleMonth(month) {
    return (month - 1)
  }

  const excludeDates = [
    new window.Date(2022, resovleMonth(5), 1),
    new window.Date(2022, resovleMonth(5), 2),
    new window.Date(2022, resovleMonth(5), 3),  
  ];

  return (
    <Form onSubmit={sendEmail} autoComplete="off" ref={form}>
      <h1>Your Details</h1>
      <Form.Group>
        <Form.Label>Avaliable Dates</Form.Label>
        <Form.Label className="dateInput">
          <DatePicker
            name="Date"
            dateFormat="MMMM d, yyyy h:mm aa"
            selected={Date}
            required
            showTimeSelect
            showYearDropdown
            minDate={new window.Date()}
            excludeDates={excludeDates}
            onChange={(Date) => setFormDetails({ ...FormDetails, Date })}
          />
        </Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Label>Wedding Venue</Form.Label>
        <Form.Control
          name="Venue"
          value={Venue}
          required
          onChange={handleEventChange}
          type="input"
          placeholder="Enter Venue"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="Name"
          value={Name}
          required
          onChange={handleEventChange}
          type="input"
          placeholder="Enter Name"
        />
      </Form.Group>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="Email"
            value={Email}
            required
            onChange={handleEventChange}
            type="email"
            placeholder="Enter Email"
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            name="Phone"
            value={Phone}
            required
            type="Input"
            onChange={handleEventChange}
            placeholder="Enter Phone"
          />
        </Form.Group>
      </Form.Row>
      <Button variant="success" type="submit">
        Send Message
      </Button>
    </Form>
  );
};

export default FeedbackForm;
