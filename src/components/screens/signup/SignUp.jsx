import { useState } from "react"
import Layout from "../../layout/Layout"
import axios from "axios"
import styles from './SignUp.module.scss'
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import Input from "../../ui/input/Input"

const SignUp = () => {

  /*const [post,setPost] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleInput = (e) =>{
    setPost({...post, [e.target.name]:e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(post);
    axios.post('http://localhost:8000/api', post)
    .then(response => console.log(response))
    .catch(err => console.log(err))
    navigate('/login')
  }

  */

  const navigate = useNavigate();

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


  const onSubmit = (data) =>{
    alert(JSON.stringify(data))
    console.log(data);
    reset();
  }


  return (
    <Layout>
      <div className='register'>
          <div className='container'>
              <div className='flex justify-center mb-10 text-3xl font-semibold'>
                  <h1 className={styles.mainText_first}>Register</h1>
                  <div>&nbsp;</div>
                  <h1>Account</h1>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>

                <label className="mb-3 font-medium">Username
                </label>

                <input  className={styles.inputs} {... register('username', {
                    required: 'Заполните поле',
                    minLength: {
                      value: 5,
                      message: 'Минимум 5 символов'
                    }
                  })}/>
                <div style={{color: 'red'}}>
                    {errors?.username && <p>{errors?.username.message || 'error' }</p>}
                </div>



                <button className={styles.btn} type="submit" disabled={!isValid}> Register Now</button>

              </form>
                <Input name = 'username' required = 'Заполните поле' value = '5' message = 'Минимум 5 символов' />


              <button className={styles.btnTwo} onClick={() => navigate('/login')}>Already have an account</button>
          </div>
        </div>
    </Layout>
  )
}

export default SignUp