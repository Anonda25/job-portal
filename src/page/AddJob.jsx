import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../Hooks/UseAuth';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
    const { user } = useAuth();
    const Navigate = useNavigate()
    const handelSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        // console.log(formData.entries());
        const intialData = Object.fromEntries(formData.entries())
        const { min, max, currency, ...newJobs } = intialData;
        newJobs.salaryRange = { min, max, currency }
        console.log(min, max, currency);
        newJobs.responsibilities = newJobs.responsibilities.split('\n')
        newJobs.requirements = newJobs.requirements.split('\n')
        console.log(newJobs);
        fetch(`http://localhost:4000/job`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newJobs)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire('success')
                }
                Navigate('/MyPostJobs')
            })
    }
    return (
        <div>
            <h1 className="text-2xl text-center">Add the Jobs</h1>
            <form onSubmit={handelSubmit} className="card-body">
                {/* Job Title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" placeholder="Job Title" name='title' className="input input-bordered" required />
                </div>
                {/* Job location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" placeholder="location" name='Location' className="input input-bordered" required />
                </div>
                {/* Job company */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">company</span>
                    </label>
                    <input type="text" name='company' placeholder="company" className="input input-bordered" required />
                </div>
                {/* Job category */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">category</span>
                    </label>
                    <select name='category' defaultValue="Pick on the Job Category" className="select select-ghost w-full max-w-xs">
                        <option disabled >Pick on the Job Category</option>
                        <option>Engnaring</option>
                        <option>Teaching</option>
                        <option>Finance</option>
                    </select>
                </div>
                {/* Job Type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <select name='jobType' defaultValue="Pick on the Job Category" className="select select-ghost w-full max-w-xs">
                        <option disabled >Pick on the Job Category</option>
                        <option >Full-time</option>
                        <option >Intern</option>
                        <option >Begener</option>
                    </select>
                </div>
                {/* salery reange */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 items-end'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Saleray reange</span>
                        </label>
                        <input type="text" placeholder="min" name='min' className="input input-bordered" required />
                    </div>
                    <div className="form-control">

                        <input type="text" placeholder="max" name='max' className="input input-bordered" required />
                    </div>
                    <div className="form-control">

                        <select defaultValue="Currency" name='currency' className="select select-ghost w-full max-w-xs">
                            <option disabled > Currency</option>
                            <option >USDT</option>
                            <option >USD</option>
                            <option >BDT</option>
                            <option >INR</option>
                        </select>
                    </div>
                </div>
                {/* Job descriptions */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">description</span>
                    </label>
                    <textarea className="textarea " name='description' placeholder="description "></textarea>
                </div>
                {/* Job requerments */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job requerments</span>
                    </label>
                    <textarea className="textarea " name='requirements' placeholder="Put each requerments in a new line "></textarea>
                </div>
                {/* Job responsibilities */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job responsibilities</span>
                    </label>
                    <textarea className="textarea " name='responsibilities' placeholder="write a responsibilities in a new line "></textarea>
                </div>
                {/* HR NAME */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR NAME</span>
                    </label>
                    <input type="text" name='hr_name' placeholder="HR NAME " className="input input-bordered" required />
                </div>
                {/* HR EMAIL*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR EMAIL</span>
                    </label>
                    <input type="email" defaultValue={user?.email} name='hr_email' placeholder="HR Email" className="input input-bordered" required />
                </div>
                {/* HR applicationDeadline*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <input type="date" name='applicationDeadline' placeholder="Deadline" className="input input-bordered" required />
                </div>
                {/* COMPANY LOGO*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Logo</span>
                    </label>
                    <input type="url" name='company_logo' placeholder="company Logo" className="input input-bordered" required />
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Jobs</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;