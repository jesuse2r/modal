import React, { useContext,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/Context.jsx";



const Card = ({ use }) => {
	
	const navigate = useNavigate()
	const { deleteContact, updateUserEdit } = useContext(UserContext);
	const deleteNewContact = () => {
		
		deleteContact();

	

	};
const newEditContact = (id)=> {
	updateUserEdit(id)
	navigate("/profile")
}

	return (
		<>
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4">
						<img
							src="https://picsum.photos/200/150"
							className="img-fluid rounded-circle my-4 mx-3"
							alt="..."
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<div className="d-flex justify-content-between">
								<h5 className="card-text">
									<small className="text-body-secondary">{use.full_name}</small>
								</h5>
								<div className="d-flex gap-5">

									<i onClick={()=>newEditContact(use.id)}  className="fas fa-edit icon "></i>{" "}


									<div onClick={()=> updateUserEdit(use.id)} type="text" className="text-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
										<i  className="text-dark icon fas fa-trash"></i>
										</div>



									</div>
								</div>

								<p className="card-text">
									<i className="fas fa-envelope"></i>{" "}
									<small className="text-body-secondary">{use.email}</small>
								</p>
								<p className="card-text">
									{" "}
									<i className="fas fa-map-marker-alt"></i>{" "}
									<small className="text-body-secondary">{use.address}</small>{" "}
								</p>
								<p className="card-text">
									{" "}
									<i className="fas fa-phone"></i>{" "}
									<small className="text-body-secondary">{use.phone}</small>
								</p>
							</div>
						</div>
					</div>
				</div>






				<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="exampleModalLabel">Danger</h1>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body">
								delete contact
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">oh No</button>
								<button  onClick={() => deleteNewContact()} type="button" className="btn btn-primary" data-bs-dismiss="modal" >Yes baby</button>
							</div>
						</div>
					</div>
				</div> 
 
			</>

			);
};

			export default Card;
