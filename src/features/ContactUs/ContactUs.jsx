import React, { useState, useRef } from "react";
import Confetti from './Confetti';
import ContactUsForm from './ContactUsForm';
import PageHeader from '../../components/Headers/Pageheaders';
import { Formik } from 'formik';
import SendEmail from './SendEmail';
import { useToasts } from "react-toast-notifications";
import Spinner from '../../components/Loading/Spinner';
import Validations from './Validations';
import * as Yup from 'yup';

const ContactUs = () => {   
  const [Submitted, setSubmitted] = useState(false);
  const [Loading, setLoading] = useState(false);
  const form = useRef();
  const { addToast } = useToasts();
  if (Loading) return <Spinner />;
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
                hair: false,
                decor: false,
                cakehoop: false,
                styledshoot: false,
              }),
              details: ''
            }}
            validationSchema={Validations}
            onSubmit={() => { SendEmail(form.current, setSubmitted, setLoading, addToast) }}
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
