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
    return(<div>
        
        <GoogleLogin 
         clientId={window.ENV.GOOGLE_CLIENT_ID}
         buttonText="Login"
         onSuccess={responseGoogle}
         onFailure={()=>{console.log("error occured")}}
          />
    </div>);
    return(<div></div>)
}