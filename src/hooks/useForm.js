// write your custom hook here to control your checkout form

import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {

    if (localStorage.getItem(key)) {

      return (JSON.parse(localStorage.getItem(key)))
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue))
      return initialValue;
    }
  });

  const setStoredValue = (value) => {

    localStorage.setItem(key, JSON.stringify(value))

    setValue(value);
  }

  return ([value, setStoredValue])
}

const useForm = initialState => {

  const [values, setValues] = useLocalStorage('form', initialState)

  const handleChanges = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  // const clearForm = e => {
  //   e.preventDefault();
  //   setValues(initialState)
  // }

  return ([values, handleChanges])
}

export default useForm;