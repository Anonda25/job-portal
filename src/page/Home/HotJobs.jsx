import React, { useEffect, useState } from 'react';
import HotJobsCard from '../HotJobsCard';

const HotJobs = () => {
    const [jobs, setJobs]= useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/job')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    console.log(jobs);
    return (
        <div>
            <div className='w-11/12 mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job =><HotJobsCard key={job._id} job={job}></HotJobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;