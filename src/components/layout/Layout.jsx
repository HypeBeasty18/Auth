import React from 'react'
import './Layout.module.scss'
import { useNavigate } from 'react-router-dom';
const Layout = ({children}) => {

  const navigate = useNavigate();

  return (
    <div style={{margin: '0 250px'}}>
      <header className='flex text-xl justify-between '>
        <a href='/' className='flex items-center gap-2 m-2'>
          <img src='../../../public/favicon.svg' alt='logo'/>
          CryptoBit
        </a>
        <button onClick={() => navigate('/signup')}>
          Log in / Sign up
        </button>
      </header>
      <div className=' mt-10 flex justify-center items-center'>
        {children}
      </div>
    </div>
  )
}

export default Layout