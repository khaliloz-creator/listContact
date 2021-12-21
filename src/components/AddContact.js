import React, { useState, useEffect, useRef } from 'react';
import { useUser } from "../contexts/UserState";
import "../css/style2.css";
import * as Icon from 'react-bootstrap-icons';
import { postuser, setLoading } from "../contexts/UserAction";
import 'bootstrap/dist/css/bootstrap.min.css';


const AddContact = () => {
    const [userState, userDispatch] = useUser();




    const [formStatus, setFormStatus] = useState(false);
    const [query, setQuery] = useState({
        name: "",
        email: "",
        phone: ""
    });


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuery((prevState) => ({
            ...prevState,
            [name]: value
        }));

    };





    const handleSubmit = (e) => {


        e.preventDefault();
        postuser(query)
            .then(res => {
                setFormStatus(true);
                setQuery({
                    name: "",
                    email: "",
                    phone: "",

                });
                console.log("jawabhy")
            })
            .catch((error) => {
                console.log("fema mouchkla " + error)
            })

    };





    return (
        <div className="registration-form ">
            <form onSubmit={handleSubmit}>
                <div class="form-icon">
                    <span><Icon.Person /></span>
                </div>
                <div class="form-group">
                    <input type="text" className="form-control item" value={query.name} onChange={e => handleChange(e)} name="name" c placeholder="username..." required />
                </div>

                <div class="form-group">
                    <input type="email" className="form-control item" onChange={e => handleChange(e)} name="email" placeholder="your@email.com" required value={query.email} />
                </div>
                <div class="form-group">
                    <input type="text" className="form-control item" name="phone" value={query.phone} onChange={e => handleChange(e)} placeholder="Phone Number" />
                </div>


                <div className="form-group mt-3 text-center">
                    {formStatus ? (
                        <div className="alert alert-success">
                            Client est ajouté.
                        </div>
                    ) : (
                        ""
                    )}
                    <button type="Submit" className="btn btn-block create-account">Ajouter</button>
                </div>
            </form>
        </div>

    );

}

export default AddContact;