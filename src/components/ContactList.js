import React, { useEffect } from "react";
import "../css/style.css";
import NavBar from "./NavBar";
import axios from "axios";
import { useUser } from "../contexts/UserState";
import { getUser, setLoading } from "../contexts/UserAction";
import 'bootstrap/dist/css/bootstrap.min.css';



export const ContactList = () => {
    const [userState, userDispatch] = useUser();
    const { user, loading, error, message } = userState;
    let i = 0;
    // get user info handler
    const getUserInfoHandler = async () => {
        await getUser(userDispatch);
        setLoading(userDispatch, false);
        console.log("true")
    };

    // get user info
    useEffect(() => {
        getUserInfoHandler();
    }, []);

    let users = user.response;


    const deleteRow = (id) => {
        console.log(id);
        axios.delete(`http://localhost:5006/api/contact/${id}`)
            .then(res => {
                window.location.reload(false);
                alert("client est supprimé avec succes");

            }).catch((e) => {
                console.log("errooor", e);
            })
    }



    return (

        <>
            <div class="d-flex h-100 " >
                {loading && <p>Loading...</p>}
                {error && <p>{message}</p>}
            </div>
            <div class="column  align-items-center">
                <NavBar />

                <table class="table table-striped table-light ">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map((user) => (
                            <tr>
                                <th scope="row" key={i++}>{i++}</th>
                                <td key={user.name}>{user.name}</td>
                                <td key={user.email}>{user.email}</td>
                                <td key={user.phone}>{user.phone}</td>
                                <td key={user._id}>
                                    <input type="button" value="Delete" className="btn btn-danger" onClick={e => deleteRow(user._id)} />
                                </td>



                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};