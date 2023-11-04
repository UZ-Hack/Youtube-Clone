import { useState, useContext } from "react"
import { ContextProvider } from '../Context/GlobalContext'
import { Link } from "react-router-dom"
import firebase from '../../firebase'

const Login = () => {
    const {mode} = useContext(ContextProvider)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    
    async function signIn(event) {
        event.preventDefault()

        if(!email.trim()) {
            setError('Fill in the forms')
        }

        if(!password.trim()) {
            setError('Fill in the forms')
        }

        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);

            window.location = '/'
            setError('')
          } catch (error) {
            if (error.code === "auth/user-not-found") {
              setError("User not found");
            } else if (error.code === "auth/wrong-password") {
              setError("Password is incorrect");
            }
        }
    }

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
        <h2 className="text-red-700 font-bold text-5xl">Login</h2>
        <form className="flex flex-col gap-3 pt-5" onSubmit={signIn}>
            <input type="email" className={`${mode ? 'bg-[#0b0b0b] border-none' : 'border'} ms:w-[500px] p-4 zero:w-[300px] outline-none rounded-full`} name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" className={`${mode ? 'bg-[#0b0b0b] border-none' : 'border'} ms:w-[500px] p-4 zero:w-[300px] outline-none rounded-full`} name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <span className="font-bold text-red-700">{error}</span>
            <button className="border-2 p-4 font-bold text-xl text-white bg-red-700 mt-8 rounded-full hover:bg-transparent hover:text-red-700 border-red-700">Sign In</button>
        </form>
        <span className="pt-3 text-gray-300"><Link to='/register'>Sign up to Youtube</Link></span>
    </div>
  )
}

export default Login