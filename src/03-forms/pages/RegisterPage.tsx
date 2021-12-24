import useForm from '../hooks/useForm';

import "../styles/styles.css";

export const RegisterPage = () => {

  const {isValidEmail, resetForm, onChange, formData} = useForm({
    name: "",
    email: "",
    password: "",
    password1: "",
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formData)
  }
  
  const { name, email, password, password1 } = formData;

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          onChange={onChange}
          name="name"
          type="text"
          placeholder="Name"
          value={name}
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />

        {name.trim().length <= 0 && <span>Este campo es necesario</span>}

        <input
          onChange={onChange}
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />

        {!isValidEmail(email) && <span>Email no válido</span>} 

        <input
          onChange={onChange}
          name="password"
          type="password"
          placeholder="Password"
          value={password}
        />

        {password.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password.trim().length > 0 && password.trim().length < 6 && <span>La contraseña debe tener más de 6 caracteres</span>}

        <input
          onChange={onChange}
          name="password1"
          type="password"
          placeholder="Confirm Password"
          value={password1}
        />

        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length > 0 && password !== password1 && <span>Las contraseñas deben ser iguales</span>}

        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>Reset</button>
      </form>
    </div>
  );
};