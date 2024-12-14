import React, { useContext } from 'react';
import { Links, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import useAuth from '../../Hooks/UseAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id } = useParams()
    const { user } = useAuth()
    const Navigate = useNavigate()
    const handelSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const linkdin = form.linkdin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        const profileLinks = {
            job_id: id,
            applycant_email: user?.email,
            linkdin,
            github,
            resume,
        }
        console.log(profileLinks);
        fetch(`http://localhost:4000/job-applications`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(profileLinks)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                    Navigate('/myApplycation')
                }
            })
    }
    return (
        <div>
            JobApply
            <form onSubmit={handelSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resumi URL</span>
                    </label>
                    <input type="url" name='resume' placeholder="Resumi url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">GITHUB URL</span>
                    </label>
                    <input type="url" name='github' placeholder="GITHUB url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">LinkDin URL</span>
                    </label>
                    <input type="url" name='linkdin' placeholder="Linkdin url" className="input input-bordered" required />
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;