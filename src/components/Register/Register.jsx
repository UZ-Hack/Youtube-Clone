import { useState, useContext } from "react"
import { ContextProvider } from '../Context/GlobalContext'
import firebase from "../../firebase"
import { Link } from "react-router-dom"

const Register = () => {
    const {mode} = useContext(ContextProvider)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    
    async function createAccount(event) {
        event.preventDefault()

        if (!name.trim() && !email.trim() && !password.trim()) {
            setError('Fill in the forms')
            return;
        }
        
        if (password !== confirmPassword) {
            setError('Passwords do NOT match')
            return;
        }


        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            localStorage.setItem("userName", JSON.stringify({ name: name }));
            window.location = '/'
        } catch (error) {
            console.error(error);
        }

        setName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setError('')
    }

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
        <h2 className="text-red-700 font-bold text-5xl">Register</h2>
        <form className="flex flex-col gap-3 pt-5" onSubmit={createAccount}>
            <input type="text" className={`${mode ? 'bg-[#0b0b0b] border-none' : 'border'} ms:w-[500px] p-4 zero:w-[300px] outline-none rounded-full`} name="name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="email" className={`${mode ? 'bg-[#0b0b0b] border-none' : 'border'} ms:w-[500px] p-4 zero:w-[300px] outline-none rounded-full`} name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" className={`${mode ? 'bg-[#0b0b0b] border-none' : 'border'} ms:w-[500px] p-4 zero:w-[300px] outline-none rounded-full`} name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <input type="password" className={`${mode ? 'bg-[#0b0b0b] border-none' : 'border'} ms:w-[500px] p-4 zero:w-[300px] outline-none rounded-full`} name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
            <span className="font-bold text-red-700">{error}</span>
            <button className="border-2 p-4 font-bold text-xl text-white bg-red-700 mt-8 rounded-full hover:bg-transparent hover:text-red-700 border-red-700">Create Account</button>
        </form>
        <span className='pt-3 flex gap-2 text-gray-300'>
            Do you have an account?
            <Link to='/login'>
              <strong>Login</strong>
            </Link>
        </span>
    </div>
  )
}

export default Register