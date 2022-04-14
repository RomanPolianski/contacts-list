import { ErrorMessage, Field } from 'formik';
import s from './Select.module.css'

function Select(props) {
    const { label, name, options, ...rest } = props;
    return (
        <div className={s.formInnerContainer}>
            <label htmlFor={name}>{label}</label>
            <Field as='select' id={name} name={name} {...rest} className={s.classic}>
                {
                    options.map(option => {
                        return(
                            <option key={option.value} value={option.value}>{option.key}</option>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={name} />
        </div>
    )
}

export default Select;