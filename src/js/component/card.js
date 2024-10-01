import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt, faLocationDot, faPhoneFlip, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const ContactCard = () => {
    const {store} = useContext(Context);
    const navigate = useNavigate()
    return (
        <div className="container justify-content-center">
    <div className="row">
        {store.contacts.length > 0 ? (
            store.contacts.map((contact, index) => (
                <div className="row border border-1 p-2" key={index}>
                    <div className="col-1 me-5 ">
                    <img src="https://bcw-media.s3.ap-northeast-1.amazonaws.com/text_to_image_v6_poster_01_f038887d26.jpg" width="100" height="100"/>
                    </div>
                    <div className="col-6">
                        <h5>{contact.name}</h5>
                        <ul className="list-group border-none d-flex align-items-start flex-column p-0" style={{ listStyle: 'none' }}>
                            <li>
                                <p><FontAwesomeIcon icon={faLocationDot} className="me-2" />{contact.address}</p> 
                            </li>
                            <li>
                                <p><FontAwesomeIcon icon={faPhoneFlip} className="me-2" />{contact.phone}</p> 
                            </li>
                            <li>
                                <p><FontAwesomeIcon icon={faEnvelope} className="me-2" />{contact.email}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex justify-content-end">
                        <Link to={`/updateContact/${contact.id}`}>
                                <FontAwesomeIcon icon={faPencilAlt} className="me-5" />
                        </Link>
                        <Link to={`/deleteContact/${contact.id}`}>
                                <FontAwesomeIcon icon={faTrashAlt} />
                        </Link>
                        </div>
                    </div>
                </div>
            ))
        ) : (
            <div className="col-12">
                <p className="list-group-item">No hay contactos disponibles.</p>
            </div>
        )}
    </div>
</div>

   /* <div className="container mt-5">
    <ul className="list-group">
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
            
            </ul>
            </div>*/
        )
    };