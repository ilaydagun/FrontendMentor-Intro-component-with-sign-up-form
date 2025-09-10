import { useState } from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './App.css'

function App() {
  const SignupSchema = yup.object().shape({
    firstName: yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: yup.string()
      .email('Invalid email')
      .required('Required'),
    password: yup.string()
      .min(6, 'Password too short')
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    validationSchema: SignupSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      alert("Form submitted successfully!");
      resetForm();
    }
  });

  return (
    <Box>
      <section>
        <div className="overlay">
          <div className="writing-part">
            <h1 className="header" id="header">Learn to
              code by watching others</h1>

            <p className="explanation" id="explanation">
              See how experienced developers solve
              problems in real-time. Watching scripted
              tutorials is great, but understanding how
              developers think is invaluable.</p>
          </div>

          <div className="form-part">
            <p className="trial-info"><strong>Try it free 7 days </strong>then $20/mo. thereafter</p>
            <form className="form" onSubmit={formik.handleSubmit}>
              <div className="input-container">
                <TextField
                  type="text"
                  className="firstName"
                  id="firstName"
                  placeholder="First Name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  fullWidth></TextField>

                <div className="error">
                  {formik.errors.firstName && formik.touched.firstName
                    ? formik.errors.firstName
                    : "\u00A0"} {/* Non-breaking space keeps the height reserved */}
                </div>
              </div>
              <div className="input-container">
                <TextField
                  type="text"
                  className="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  fullWidth></TextField>

                <div className="error">
                  {formik.errors.lastName && formik.touched.lastName
                    ? formik.errors.lastName
                    : "\u00A0"} {/* Non-breaking space keeps the height reserved */}
                </div>
              </div>
              <div className='input-container'>
                <TextField
                  type="email"
                  className="email"
                  id="email"
                  placeholder="Email Address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  fullWidth></TextField>

                <div className="error">
                  {formik.errors.email && formik.touched.email
                    ? formik.errors.email
                    : "\u00A0"} {/* Non-breaking space keeps the height reserved */}
                </div>
              </div>
              <div className="input-container">
                <TextField
                  type="password"
                  className="password"
                  id="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  fullWidth></TextField>

                <div className="error">
                  {formik.errors.password && formik.touched.password
                    ? formik.errors.password
                    : "\u00A0"} {/* Non-breaking space keeps the height reserved */}
                </div>
              </div>

              <Button type="submit">CLAIM YOUR FREE TRIAL</Button>

              <footer>
                <small>By clicking this button, you are agreeing
                  to our <span className="terms-and-services"
                    id="terms-and-services">Terms and Services</span>
                </small>
              </footer>
            </form>
          </div>
        </div>
      </section>
    </Box>
  )
}

export default App
