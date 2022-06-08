import React from "react";
import { ErrorMessage, Field, Form } from "formik";
import { FormGroup } from "react-bootstrap";
import DatePickerField from './FieldComponents/DatePicker';
import Checkbox from './FieldComponents/Checkbox';
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import excludeDates from './ExcludeDates';

const ContactUsForm = (props) => {
  const { errors, touched, formRef } = props;
  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }
  return (
  <>
    <Form ref={formRef}>
      <div className="form-group">
        <FormGroup>
          <label htmlFor="date">Date</label>
          <DatePickerField
            name="date"
            dateFormat="MMMM d, yyyy"
            excludeDates={excludeDates} minDate={new window.Date()}
            className={'form-control' + (errors.date && touched.date ? ' is-invalid' : '')}
          />
          <ErrorMessage name="date" component="div" className="invalid-feedback" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="time">Ceremony Time</label>
          <Field name="time" type="text" className={'form-control' + (errors.time && touched.time ? ' is-invalid' : '')} />
           <ErrorMessage name="time" component="div" className="invalid-feedback" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
          <ErrorMessage name="name" component="div" className="invalid-feedback" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="venue">Venue</label>
          <Field name="venue" type="text" className={'form-control' + (errors.venue && touched.venue ? ' is-invalid' : '')} />
          <ErrorMessage name="venue" component="div" className="invalid-feedback" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <Field name="email" type="text" validate={validateEmail} className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
          <ErrorMessage name="email" component="div" className="invalid-feedback" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="phone">Phone</label>
          <Field name="phone" type="text" className={'form-control' + (errors.phone && touched.phone ? ' is-invalid' : '')} />
          <ErrorMessage name="phone" component="div" className="invalid-feedback" />
        </FormGroup>
        <label htmlFor="packages">Please select an option</label>
        <div className="form-group form-check">
          <Checkbox name='packages' value='hair' label='Hair' />
          <Checkbox name='packages' value='decor' label='Décor' />
          <Checkbox name='packages' value='cakehoop' label='Cake Hoop' />
          <Checkbox name='packages' value='styledshoot' label='Styled Shoot' />
          <ErrorMessage name="packages" component="div" className="invalid-feedback" />
        </div>
        <FormGroup>
          <label htmlFor="phone">Please tell us more to help get started</label>
          <Field name="details" component="textarea" rows="5" className={'form-control' + (errors.details && touched.details ? ' is-invalid' : '')} />
          <ErrorMessage name="details" component="div" className="invalid-feedback" />
        </FormGroup>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary mr-2">Contact Us</button>
      </div>
    </Form>
  </>
  );
};

export default ContactUsForm;
