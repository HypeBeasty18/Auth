import { useForm } from 'react-hook-form';

const Input = ({name, required, value, message }) => {

  const nameForm = name

  const {
    register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur'
  });

  return (
    <div>
      <label style={{textTransform: 'capitalize'}}>
        {name}
        <input {... register(`${name}`, {
          required: `${required}`,
          minLength: {
            value: {value},
            message: `${message}`
          }
        })}/>
      </label>
      <div style={{color: 'red'}}>
        {errors?.password && <p>{errors?.username.message || 'error' }</p>}
      </div>
    </div>
  )
}

export default Input