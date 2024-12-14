import React, { useEffect, useState } from 'react';
import { FaDollarSign, FaMapMarker } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const JobDeteils = () => {
    const { _id, title, company_logo, location, category, requirements, company, applicationDeadline, description, hr_name, hr_email, salaryRange } = useLoaderData()


    return (
        <div className='w-11/12 mx-auto my-10'>

            <div className="card card-compact bg-base-100  shadow-xl p-4">
                <div className='flex gap-2 items-center justify-between p-4'>
                    <figure>
                        <img
                            src={company_logo}
                            alt="Shoes" />
                    </figure>
                    <div>
                        <p>{company}</p>
                        <p className='flex items-center gap-2'><FaMapMarker></FaMapMarker> {location}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{title}!</h2>
                    <div className='flex gap-3 '>
                        {
                            requirements.map((skill, ind) => <p className='border p-2 bg-gray-500' key={ind}>{skill}</p>)
                        }
                    </div>
                    <p>{description}</p>
                    <div className='flex justify-between my-4'>
                        <p>{category}</p>
                        <div className='flex items-center gap-2'>
                            salary:<FaDollarSign></FaDollarSign>  {salaryRange.min}- {salaryRange.max} {salaryRange.currency}
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/JobApply/${_id}`}>
                            <button className="btn btn-primary">Apply Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDeteils;