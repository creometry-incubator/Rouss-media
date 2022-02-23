import GoogleLogin from 'react-google-login';


export default function Sign(){
    const responseGoogle = (info)=>{
        console.log(info.profileObj);
    }
    return(<div>
        <GoogleLogin 
         clientId={window.ENV.GOOGLE_CLIENT_ID}
         buttonText="Login"
         onSuccess={responseGoogle}
         onFailure={()=>{console.log("error occured")}}
          />
    </div>);
}