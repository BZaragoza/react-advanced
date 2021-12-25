import { Form, Formik } from "formik";
import * as Yup from 'yup';

import formJson from "../data/custom-form.json";
import { TextInput } from "../components/TextInput";
import { CustomSelect } from '../components/CustomSelect';

const initialValues: {[key: string]: any} = {}
const requiredFields: {[key: string]: any} = {}

for (const input of formJson) {
  
  initialValues[input.name] = input.value;

  if (!input.validations) continue

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("Requerido")
    }
    if (rule.type === "min") {
      schema = schema.min((rule as any).value || 2, `Mínimo de ${(rule as any).value || 2} caracteres`)
    }

    if (rule.type === "email") {
      schema = schema.email('El formato del email es inválido')
    }

    requiredFields[input.name] = schema;
  }

}

const validationSchema = Yup.object({...requiredFields})


export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              
              if (type==='input' || type==='password' || type==='email') {
                return (
                  <TextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              } else if (type==='select') {
                return (
                  <CustomSelect 
                    key={name}
                    label={label}
                    name={name}
                  >
                    <option value="">Select a Game</option>
                    {
                      options?.map(option => (
                        <option key={option.id} value={option.label}>{option.label}</option>
                      ))
                    }
                  </CustomSelect>
                )
              }

              throw new Error(`Type: "${type}" not supported`)
              
            })}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
