import React from "react";
import "../../styles/home.css";
import { ButtonContact } from "../component/buttoncontact";
import { ContactCard } from "../component/card";




export const Home = () => {
	return (
	<div className="container mt-5">
		<ButtonContact className="me-5"/> 
		<ContactCard/>
	</div>
);
};

/*	<ul className="list-group">
		{Array.isArray(store.contacts) && store.contacts.length > 0 ? (
			store.contacts.map((contact, index) => (
				<li key={index} className="list-group-item d-flex justify-content-between">
					<img src="https://bcw-media.s3.ap-northeast-1.amazonaws.com/text_to_image_v6_poster_01_f038887d26.jpg" width="100" height="100"/>
					<div className="m-0">
					<h5>{contact.name}</h5>
					<p><FontAwesomeIcon icon={faLocationDot} />   {contact.address}</p>
					<p><FontAwesomeIcon icon={faPhoneFlip} />   {contact.phone}</p>
					<p><FontAwesomeIcon icon={faEnvelope} />   {contact.email}</p>
					</div>
				<div className="">
				<Link to="/formAddNewContact">
					<FontAwesomeIcon icon={faPencilAlt} className="me-5" />
				</Link>
					<FontAwesomeIcon icon={faTrashAlt} />
				</div>
				</li>
		)) 
	) : (<li className="list-group-item">No hay contactos</li>)
		}

	</ul> */