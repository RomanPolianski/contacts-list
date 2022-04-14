
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ErrorMessage, useField } from 'formik';
import classNames from 'classnames';
import s from './InputField.module.css'

function InputField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className={s.formInnerContainer}>
      <label htmlFor={field.name} className={s.label}>
        {label}
      </label>
      <input
        {...field}
        {...props}
        autoComplete="off"
        className={classNames(
          s.formInput,
          meta.touched && meta.error && s.formError,
        )}
      />
      <div className={s.errorMessage}>
        <ErrorMessage name={field.name} />
      </div>
    </div>
  );
}

export default InputField;