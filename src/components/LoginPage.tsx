
import './loginPage.css';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios,{ AxiosError } from "axios";
function LoginPage() {

    type UserLoginProp = {
        username : string
        password : string
     }

     const navigate = useNavigate();

    async function checkUser(objofinput:UserLoginProp){
        console.log(objofinput)
        try {
            const DataFromLogin = await axios.post("http://localhost:5000/users/loginFunc", objofinput);
            console.log(DataFromLogin.data.token,"token")
            console.log(DataFromLogin.data.isAdmin,"isadmin")
            localStorage.setItem("token", DataFromLogin.data.token)
            if (DataFromLogin.data.isAdmin==false){
                navigate('Worker')
            }else{
                navigate('Manager')
            }
          } catch (err) {
            const axiosErr = err as AxiosError;
            console.log(axiosErr.response?.data);
            alert(axiosErr.response?.data)
          }
        
    }
    
    const {register, handleSubmit}=useForm();
    return(
      <div id="login-container">
        <div id="login-inner">
          <h1 id='login-tittle'>Log in</h1>
          <form onSubmit={handleSubmit((data)=>{checkUser((data as UserLoginProp))})}>
          <div className='username-login-container'> 
            <div className="login-div">
              <span className="user">Username</span>
              <input className='login-input' type='text' {...register("username")}></input>
            </div>
          </div>
          <div className='username-login-container'>
            <div className="login-div">
              <span className="user">Password</span>
              <input className="login-input" type='password' {...register("password")}></input>
            </div>
          </div>
          <div id="divofsubmit-btn"><button id="login-btn" type="submit">Sign In</button></div>
          </form>
          </div>
    </div>
    )
}
export default LoginPage;
