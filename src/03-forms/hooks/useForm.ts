import { useState } from "react";

const useForm = <T>(initState: T) => {
  const [formData, setFormData] = useState(initState);

  const isValidEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const resetForm = () => {
    setFormData(initState);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    ...formData,
    formData,
    isValidEmail,
    onChange,
    resetForm,
  };
};

export default useForm;
