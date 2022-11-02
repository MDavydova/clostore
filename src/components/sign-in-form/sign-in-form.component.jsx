import {useState} from "react";
import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase.utils";
import '../sign-up-form/sign-up-form.styles.scss'
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const defaultFormFields = {
    email: '',
    password: '',
}


const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const SignInGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password)
            resetFormFields();
        } catch (error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error)
            }
            if(error.code === "auth/wrong-password") {
                alert('wrong password')
            }
        }
    }

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type='email' onChange={handleChange}   name="email" value={email} />

                <FormInput label="Password" type='password' onChange={handleChange}   name="password" value={password} />
                <div className="button-container">
                    <Button type="submit">Sign in</Button>
                    <Button type="button" buttonType="google" onClick={SignInGoogle}>Sign in with Google</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm
