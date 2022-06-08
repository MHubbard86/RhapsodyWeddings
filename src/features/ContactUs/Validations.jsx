import * as Yup from 'yup';

const Validations = Yup.object().shape({
  date: Yup.string().required("Date is required"),
  time: Yup.string().required('Time is required'),
  name: Yup.string().min(2, 'Name too Short!').required('Name is required'),
  venue: Yup.string().min(2, 'Venue too Short!').required('Venue is required'),
  email: Yup.string()                
    .email('Email is invalid')
    .required('Email is required'),                
  phone: Yup.string().required('Phone Number is required'),
  details: Yup.string().min(2, 'Please enter more details').required('Details required'),
});

export default Validations;
