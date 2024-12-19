import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/UseAuth';

const MyPostJobs = () => {
    const [jobs, setJobs]= useState([])
    const {user}=useAuth()
    useEffect(()=>{
        fetch(`http://localhost:4000/job?email=${user?.email}`)
        .then(res=> res.json())
        .then(data =>{
            setJobs(data);
        })
    }, [user?.email])
    console.log(jobs);
    return (
        <div>
            <h1>My Post Jobs {jobs.length}</h1>
           <div className='w-11/12 mx-auto '>
                <div className="overflow-x-auto ">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Count</th>
                                <th>Title</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                jobs.map((job, index) => <tr key={job._id}>
                                    <th>{index + 1}</th>
                                    <td>{job.title}</td>
                                    <td>{job.applicationDeadline}</td>
                                    <td>{job.applicationCount}</td>
                                    <td>{job.company}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
           </div>
        </div>
    );
};

export default MyPostJobs;
