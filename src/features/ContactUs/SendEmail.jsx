import emailjs from '@emailjs/browser';

const SendEmail = (form, setSubmitted, setLoading, addToast) => {
  const serviceID = 'default_service';
  const templateID = 'template_rty98n8';
  setLoading(true);
  emailjs.sendForm(serviceID, templateID, form, "user_NTkWkBUvl1LeIrJnVBzV3")
    .then((res) => {
      if (res.status === 200) {
        addToast("Message sent", { appearance: "info", autoDismiss: true });
        setSubmitted(true);
        setLoading(false);
      }
    })
    .catch((err) => {
      console.error("Failed to send email. Error: ", err);
      addToast("Something went wrong:" + err, { appearance: "warning", autoDismiss: true });
      setSubmitted(false);
      setLoading(false);
    });
}

export default SendEmail;
