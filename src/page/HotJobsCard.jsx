import { p } from 'motion/react-client';
import React from 'react';
import { FaSackDollar } from 'react-icons/fa6';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const HotJobsCard = ({job}) => {
    console.log(job);
    const {_id, title, company_logo, location, category, requirements,company, applicationDeadline, description, hr_name, hr_email, salaryRange }=job;
    return (
        <div className="card bg-base-100  shadow-xl">
            <div className='flex items-center gap-2'>
                <figure>
                    <img
                    className='w-12 h-12'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <p>{company}</p>
                    <p className='flex items-center gap-1'><HiOutlineLocationMarker /> {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                   {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className='flex gap-2 flex-wrap'>
                    {
                        requirements.map(skill => <p className='border p-1 hover:bg-pink-500 hover:text-black bg-gray-400 text-blue-500 '>{skill}</p>)
                    }
                </div>
                <p className='flex  items-center gap-2'>
                  Salary: <FaSackDollar></FaSackDollar>  {salaryRange.min}-{salaryRange.max}{salaryRange.currency}
                </p>
                <div className="card-actions  ">
                    <Link to={`/jobs/${_id}`}>
                    <div className="btn btn-secondary w-full ">Apply Now</div>
                    </Link>

                  
                </div>
            </div>
        </div>
    );
};

export default HotJobsCard;