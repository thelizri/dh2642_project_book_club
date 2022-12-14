import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    authenticate,
    resetAuthenticationStatus,
    selectAuthenticationError,
    selectAuthenticationIsWaiting,
} from "../../Store/slices/userSlice";
import { validateEmail, validatePassword } from "../../Utils/validationUtil";
import LoginFormView from "./LoginFormView";

const LoginForm = function() {
    const error = useSelector( selectAuthenticationError );
    const waiting = useSelector( selectAuthenticationIsWaiting );
    const dispatch = useDispatch();
    const login = true;

    useEffect( () => {
        dispatch( resetAuthenticationStatus() );
    }, [ dispatch ] );

    const handleSubmit = ( email, password ) => {
        dispatch(
            authenticate( { email, password } )
        );
    };

    const validEmail = () => {
        return validateEmail( error, login );
    }

    const validPassword = () => {
        return validatePassword( error, login );
    }

    return (
        <div>
            <LoginFormView validEmail={ validEmail }
                           validPassword={ validPassword }
                           error={ error } waiting={ waiting }
                           onSubmit={ handleSubmit }/>
        </div>
    )
}

export default LoginForm;