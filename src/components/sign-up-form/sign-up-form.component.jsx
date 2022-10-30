import {useState} from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth  } from "../../utils/firebase.utils";
import './sign-up-form.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignIpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            if(password === confirmPassword) {
                const {user} = await createAuthUserWithEmailAndPassword(email, password);
                await createUserDocumentFromAuth(user, {displayName});
            } else { return }
        } catch (error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('cannot create user, email already in use')
            } else {
                console.log(error);
            }
        }
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type='text' onChange={handleChange}   name="displayName" value={displayName} />

                <FormInput label="Email" type='email' onChange={handleChange}   name="email" value={email} />

                <FormInput label="Password" type='password' onChange={handleChange}   name="password" value={password} />

                <FormInput label="Confirm Password" type='password' onChange={handleChange}   name="confirmPassword" value={confirmPassword} />

                <Button buttonType="google" type="submit">Sign up</Button>
            </form>
        </div>
    )
}

export default SignIpForm
