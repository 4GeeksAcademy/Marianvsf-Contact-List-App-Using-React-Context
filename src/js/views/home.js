import React, { useContext } from "react";
import "../../styles/home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ButtonContact } from "../component/buttoncontact";
import { Context } from "../store/appContext";


export const Home = () => {
	const {store} = useContext(Context);
	return (
		<div className="container text-center mt-5">
		<ButtonContact/>
		<ul className="list-group">
			{Array.isArray(store.contacts) && store.contacts.length > 0 ? (
				store.contacts.map((contact, index) => (
					<li key={index} className="list-group-item d-flex justify-content-between">
					<p className="mb-0">{contact.name}</p>
					<div className="">
						<FontAwesomeIcon icon={faPencilAlt} className="me-5" />
						<FontAwesomeIcon icon={faTrashAlt} />
					</div>
					</li>
			)) 
		) : (<li className="list-group-item">No hay contactos</li>)
			}

		</ul>
	</div>
);
};
