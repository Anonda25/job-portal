import { useEffect, useState } from "react";
import useAuth from "../Hooks/UseAuth";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";


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
const hendleDelete=(id)=>{
    console.log(id);
  
    fetch(`http://localhost:4000/job-applications/${id}`, {
        method:"DELETE",
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.deletedCount > 0){

            //this is the mail jobs in the backend so  we filter the one data then delete it 
            setJobs((jobs) => jobs.filter((job) => job._id !== id));
            
            Swal.fire("Deleted!", "The job application has been deleted.", "success");
        }
    })
}

    return (
        <div>
            <h1>my application jobs {jobs.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                           
                            {
                                jobs.map(job => 
                                    <tr key={job.job_id}>
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
                                                            src={job.company_logo}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{job.title}</div>
                                                    <div className="text-sm opacity-50">{job.location}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex gap-2">
                                                {
                                                    job.requirements?.map((skill,inx) => <p key={inx}>{skill}</p>)
                                                }
                                         </div>
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                        </td>
                                        <td>Purple</td>
                                        <th>
                                            <button onClick={() => hendleDelete(job._id)} className="btn btn-ghost btn-xs"> DELETE<FaDeleteLeft></FaDeleteLeft></button>
                                        </th>
                                    </tr>
                                )
                            }
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyApplication;