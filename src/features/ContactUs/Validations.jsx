import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const Validations = Yup.object().shape({
  date: Yup.string().required("Date is required").nullable(),
  time: Yup.string().required('Time is required'),
  name: Yup.string().min(2, 'Name too short').required('Name is required'),
  venue: Yup.string().min(2, 'Venue too short').required('Venue is required'),
  email: Yup.string() 
    .email('Email is invalid')
    .required('Email is required'),                
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required('Phone Number is required'),
  details: Yup.string().min(2, 'Please enter more details').required('Details required'),
});

export default Validations;
