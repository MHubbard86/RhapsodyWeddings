import React, { useState, useRef } from "react";
import Confetti from './Confetti';
import ContactUsForm from './ContactUsForm';
import PageHeader from '../../components/Headers/Pageheaders';
import { Formik } from 'formik';
import SendEmail from './SendEmail';
import Validations from './Validations';
import * as Yup from 'yup';
import { useToasts } from "react-toast-notifications";

const ContactUs = () => {   
  const [Submitted, setSubmitted] = useState(false);
  const form = useRef();
  const { addToast } = useToasts();
  if (Submitted) return <Confetti />;  
  return (
    <section>
      <PageHeader title="Contact Us" />
      <div className="container-fluid">
        <div className="d-flex flex-wrap justify-content-center">
        <Formik
            initialValues={{
              date: '',
              time: '',
              name: '',
              venue: '',
              email: '',
              phone: '',
              packages: Yup.object({
                hair: Yup.boolean(),
                decor: Yup.boolean(),
                cakehoop: Yup.boolean(),
                styledshoot: Yup.boolean(),
              }),
              details: ''
            }}
            validationSchema={Validations}
            onSubmit={() => { SendEmail(form.current, setSubmitted, addToast) }}
          >
            {({ errors, touched}) => (
              <ContactUsForm errors={errors} touched={touched} formRef={form} />
            )}
          </Formik>
        </div>
      </div> 
    </section>
  );
};

export default ContactUs;
