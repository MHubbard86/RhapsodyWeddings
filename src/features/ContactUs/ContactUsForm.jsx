import React from "react";
import { Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import excludeDates from './ExcludeDates';

const ContactUsForm = (props) => {
  const { FormDetails, setFormDetails, handleEventChange } = props;
  return (
  <>
    <Form.Group>
      <Form.Label>Avaliable Dates</Form.Label>
      <Form.Label className="dateInput">
        <DatePicker
          name="Date"
          dateFormat="MMMM d, yyyy h:mm aa"
          selected={FormDetails.Date}
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
        value={FormDetails.Venue || ''}
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
        value={FormDetails.Name || ''}
        required
        onChange={handleEventChange}
        type="input"
        placeholder="Enter Name"
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Email</Form.Label>
      <Form.Control
        name="Email"
        value={FormDetails.Email || ''}
        required
        onChange={handleEventChange}
        type="email"
        placeholder="Enter Email"
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Phone</Form.Label>
      <Form.Control
        name="Phone"
        value={FormDetails.Phone || ''}
        required
        type="input"
        onChange={handleEventChange}
        placeholder="Enter Phone"
      />
    </Form.Group>
    <Button variant="secondary" type="submit">
      Send Message
    </Button>
  </>
  );
};

export default ContactUsForm;
