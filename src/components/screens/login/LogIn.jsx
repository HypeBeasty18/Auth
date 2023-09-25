import { useState } from "react"
import Layout from "../../layout/Layout"
import styles from './LogIn.module.scss'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LogIn = () => {

  const navigate = useNavigate();

  const [post, setPost] = useState({
    email: '',
    password: ''
   })

  const handleInput = (e) =>{
    setPost({...post, [e.target.name]:e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(post);
    axios.post('http://localhost:8000', post)
    .then(response => console.log(response))
    .catch(err => console.log(err))
    navigate('/profile')
  }

  return (
    <Layout>
      <div className='register'>
        <div className='container'>
          <div className='flex justify-center mb-10 text-3xl font-semibold'>
              <h1 className={styles.mainText_first}>Account</h1>
              <div>&nbsp;</div>
              <h1>Login</h1>
          </div>
          <form >
            <h3 className="mb-3 font-medium">Email Address</h3>
            <input className={styles.inputs} name='email' placeholder='Email Address' type='text' onChange={handleInput}/>
            <h3 className="mb-3 font-medium">Password</h3>
            <input className={styles.inputs} name='password' placeholder='Password' type='text' onChange={handleInput}/>
            <button className={styles.btn} onClick={handleSubmit} > Log in</button>
            <button className={styles.btnTwo} onClick={() => navigate('/signup')}  > Create an Account</button>
          </form>
      </div>
    </div>
    </Layout>
  )
}

export default LogIn