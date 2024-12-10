import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import loginLitte from '../../assets/lottie/Animation - 1733848550903.json'
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';

const SignIn = () => {
    const { userSignIn, googleLogin }=useContext(AuthContext)
    const handelSignIN = (e)=>{
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password);
        userSignIn(email, password)
        .then(result =>{
            console.log( 'user login in',result.user);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    const hendleGoogleLogin = ()=>{
        googleLogin()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie animationData={loginLitte}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold ml-4 mt-6">SignIn now!</h1>

                    <form onSubmit={handelSignIN} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6 ">

                            <button onClick={hendleGoogleLogin} className="btn btn-primary mb-3">Google Login</button>
                            <button className="btn btn-primary">SignIn</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;