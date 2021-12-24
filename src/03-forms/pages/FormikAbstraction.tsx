import { Formik, Form } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";
import { TextInput, CustomSelect, CustomCheckbox } from "../components";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos.")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos.")
            .required("Requerido"),
          email: Yup.string()
            .email("Email con formato inválido")
            .required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe aceptar las condiciones"),
          jobType: Yup.string()
            .notOneOf(["it-jr"], "Esta opción no está permitida")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form noValidate>
            <TextInput
              label="First Name"
              name="firstName"
              placeholder="Brian"
            />

            <TextInput
              label="Last Name"
              name="lastName"
              placeholder="Zaragoza"
            />

            <TextInput
              label="Email"
              name="email"
              type="email"
              placeholder="e@mail.com"
            />

            <CustomSelect label="Job Type" name="jobType">
              <option value="">Pick some job</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-sr">IT Senior</option>
              <option value="it-jr">IT Junior</option>
            </CustomSelect>

            <CustomCheckbox label="Terms and Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
