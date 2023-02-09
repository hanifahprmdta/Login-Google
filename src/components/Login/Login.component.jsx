import { useNavigate } from "react-router-dom";
import { signInWithGooglePopup } from "../../Config/config"

function Login (){
    const Navigate = useNavigate()
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        Navigate('/home')
    }
    return(
        <div>
            <h1>Login</h1>
            <button onClick={logGoogleUser}>Login With Google</button>
        </div>
    )
}

export default Login