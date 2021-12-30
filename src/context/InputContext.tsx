import React, { createContext, useState, FC } from "react";

interface InputContextState {
  name: string;
  phone: number;
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}
interface Display {
  name: string;
  phone: number;
}

const inputDefaultValues: InputContextState = {
  name: "",
  phone: 0,
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => {},
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => {},
};

export const InputContext =
  createContext<InputContextState>(inputDefaultValues);

const InputProvider = (children: React.ReactNode) => {
  const initalForm = {
    name: "",
    phone: 0,
  };
  const [formData, setFormData] = useState<Display>(initalForm);
  const [display, setDisplay] = useState<Display>(initalForm);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id: string = e.target.id;
    const value = e.target.value;
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name === "" && formData.phone === 0) {
    } else {
      setDisplay(formData);
    }
  };

  return (
    <InputContext.Provider
      value={{ formData, display, inputHandler, submitHandler }}
    >
      {children}
    </InputContext.Provider>
  );
};

export default InputProvider;
