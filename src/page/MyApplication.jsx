import { useEffect, useState } from "react";
import useAuth from "../Hooks/UseAuth";


const MyApplication = () => {
const {user}=useAuth()
const [jobs, setJobs]= useState([])
console.log(jobs);
useEffect(()=>{
    fetch(`http://localhost:4000/job-applications?email=${user.email}`)
    .then(res=> res.json())
    .then(data => {
        setJobs(data)
    })
},[])

    return (
        <div>
            <h1>my application jobs {jobs.length}</h1>
            <div>
                {
                    jobs.map(job => <div key={job._id} className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th>jobs</th>
                                    <th>Email</th>
                                    <th>Favorite Color</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Hart Hagerty</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Zemlak, Daniel and Leannon
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyApplication;