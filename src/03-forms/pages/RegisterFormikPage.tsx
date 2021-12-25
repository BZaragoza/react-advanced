import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          password1: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Nombre muy corto")
            .max(15, "Debe tener 15 caracteres o menos.")
            .required("Requerido"),
          email: Yup.string()
            .email("Email con formato inválido")
            .required("Requerido"),
          password: Yup.string()
            .min(6, "Debe tener 6 caracteres o más")
            .required("Requerido"),
          password1: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .min(6, "Debe tener 6 caracteres o más")
            .required("Requerido")
          })}
      >
        {({ handleReset }) => (
          <Form noValidate>
            <label htmlFor="Name">Name</label>
            <Field name="name" type="text" placeholder="Name"/>
            <ErrorMessage name="name" component="span" />

            <label htmlFor="email">Email</label>
            <Field name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="password">Password</label>
            <Field name="password" type="password" placeholder="******" />
            <ErrorMessage name="password" component="span" />

            <label htmlFor="password1">Confirm Password</label>
            <Field name="password1" type="password" placeholder="******" />
            <ErrorMessage name="password1" component="span" />

            <button type="submit">Create</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
      {/*
        {password.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password.trim().length > 0 && password.trim().length < 6 && <span>La contraseña debe tener más de 6 caracteres</span>}

        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length > 0 && password !== password1 && <span>Las contraseñas deben ser iguales</span>}

        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>Reset</button> */}
      {/* </form> */}
    </div>
  );
};
