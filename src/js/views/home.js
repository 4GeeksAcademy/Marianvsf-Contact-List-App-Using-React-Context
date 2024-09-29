import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { formNewContact } from "../component/formAddNewContact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<FontAwesomeIcon icon={faPencilAlt} className="me-5" />
        <FontAwesomeIcon icon={faTrashAlt} />
		 <p>
			<img src={rigoImage} />
		</p> 
		
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>

		<formNewContact />
		

	</div>
);
