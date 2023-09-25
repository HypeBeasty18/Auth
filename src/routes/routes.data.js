
import Home from "../components/screens/home/Home";
import LogIn from "../components/screens/login/LogIn";
import Profile from "../components/screens/profile/Profile";
import SignUp from "../components/screens/signup/SignUp";


export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: LogIn
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/signup',
    component: SignUp
  }
]