import GoogleLogin from 'react-google-login';
import axios from "axios"
import {useCookies} from "react-cookie"

export default function Sign(){
    const [cookies, setCookie] = useCookies(['gloomeyToken']);
    const responseGoogle = async (info)=>{
        let response = await axios.post(`${window.ENV.AUTHOR_SERVICE_URI}/sign`, info)
        if(response.data.token){
            setCookie("gloomeyToken", response.data.token);
        }else{
            window.alert("not permited")
        }
    }
    if(!cookies.gloomeyToken)
    return(<div className='align-center mb-5 mt-3'>
        
        <GoogleLogin
        className='google_button' 
         clientId={window.ENV.GOOGLE_CLIENT_ID}
         buttonText="Login"
         onSuccess={responseGoogle}
         onFailure={(e)=>{console.log(e)}}
         render={renderProps => (
            <a className="google_button" onClick={renderProps.onClick}>
            <i className="fab fa-google icon-mr mr-3"></i> <span>Sign up with Google</span> 
        
            </a>
        )}
          />
    </div>);
    return(<div></div>)
}