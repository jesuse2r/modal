import React, { useContext,useState } from "react";
import { Link, useNavigate } from "react-router-dom";


import { UserContext } from "../contexts/Context.jsx";

const Profile = () => {
  const [contact, setContact]= useState({
    full_name:"",
    email:"",
    agenda_slug: "Agenda_Jesus",
    address:"",
    phone:""

  })
  const navigate = useNavigate()
  const { handleEdit } = useContext(UserContext);

  const handleChangeContact = (event) => {
    console.log(event.target.name);

    setContact({ ...contact, [event.target.name]: event.target.value });
  };
const newContact = () => {
handleEdit(contact)
navigate("/")
}

  return (
    
<div className="container">
  <h1 className="text-center">  Add a new Contact</h1>
    <div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Fullname</label>
        <input placeholder="Fullname" type="text" className="form-control" id="exampleInputPassword1 " value={contact.full_name} 
        onChange={(event)=> handleChangeContact (event)} name="full_name"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label" >Email</label>
        <input placeholder="Email"type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp " value={contact.email} onChange={(event)=> handleChangeContact (event)} name="email"  />
       
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
        <input placeholder="Phone" type="text" className="form-control" id="exampleInputPassword1"  value={contact.phone} onChange={(event)=> handleChangeContact (event)} name="phone"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
        <input placeholder="Address"type="text" className="form-control" id="exampleInputPassword1"  value={contact.address} onChange={(event)=> handleChangeContact (event)} name="address" />
      </div>



      <button  onClick={() => newContact()} className="btn btn-primary w-100">save</button>

    
    </div>
    <Link to="/">or get back to contacts</Link>
    </div>


  );


};

export default Profile;