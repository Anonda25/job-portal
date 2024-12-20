import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import logo from '../../assets/logo.png'
const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)

    const handelSignOut = () => {
        signOutUser()
    }

    const links = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/myApplycation'}>MY Applycation</NavLink>
        <NavLink to={'/addjob'}>Add Jobs</NavLink>
        <NavLink to={'/MyPostJobs'}>MY Post Jobs</NavLink>
        </>

        return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm gap-3 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className='flex gap-3 items-center'>
                    <img src={logo} alt="" className='w-10' />
                    <h3 className="text-2xl">Job Protal</h3>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <button onClick={handelSignOut} className="btn">Sign Out</button></> : <>
                                <Link to={'/register'} ><button className="btn">Register</button></Link>
                        <Link to={'/login'}>
                            <button className="btn">Login</button>
                        </Link>
                    </>
                }

            </div>
        </div>
        );
};

        export default Navbar;