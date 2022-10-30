import { createUserDocumentFromAuth,
         signInWithGooglePopup}
    from '../../utils/firebase.utils'
import SignIpForm from "../../components/sign-up-form/sign-up-form.component";



const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
      <div>
          <h1>Sign in Page</h1>
          <button onClick={logGoogleUser}>Sign in with Google</button>
          <SignIpForm/>
      </div>
    )
}

export default SignIn
