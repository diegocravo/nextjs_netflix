"use client"
import { SetStateAction, useCallback, useState } from "react";
import { Input } from "../components/Input";

const Auth = () => {
    const [ form, setForm ] = useState({
        email: '',
        name: '',
        password: ''
    })
    const [ variant, setVariant ] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant((current) => current === 'login' ? 'register' : 'login')
    }, [])

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">
            <div className='bg-black w-full h-full lg:bg-opacity-50'>
                <nav className='px-12 py-5'>
                    <img src='/images/logo.png' className="h-12" /> 
                </nav>

                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 mt-2 self-center lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === 'login' ? "Login" : "Register"}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'login' && 
                                <Input id={"name"} name={"name"} onChange={handleChange} value={form.name} label={"UserName"} />
                            }
                            <Input id={"email"} name="email" onChange={handleChange} value={form.email} label={"Email"} type="email" />
                            <Input id={"password"} name="password" onChange={handleChange} value={form.password} label={"Password"} type="password"/>
                        </div>
                        <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition-colors">
                            {variant === 'login' ? "Login" : "Sign up"}
                        </button>
                        <p className="text-neutral-500 mt-12">
                            {variant === 'login' ? 'First time using NetFlix?' : 'Already have an account?'}
                            <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                                {variant === 'login' ? 'Create an account' : 'Login'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;