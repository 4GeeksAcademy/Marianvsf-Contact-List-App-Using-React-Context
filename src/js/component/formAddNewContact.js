import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const FormNewContact = () => {
  const { actions, store } = useContext(Context);
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [currentContact, setCurrentContact] = useState()
  const { contactId } = useParams();
  console.log(contactId ? contactId : "no hay contacto")
  
  useEffect(() =>{
    if (contactId) {
      let contacto = store.contacts.find((contact) => contact.id == contactId)
        setCurrentContact(contacto)
        setfullName(contacto.name)
        setEmail(contacto.email)
        setPhone(contacto.phone)
        setAddress(contacto.address)
        console.log("funciona")
    }
    }, [contactId])

  const handleSubmit = async (e) => {
    e.preventDefault();
      if (fullName === "") {
      console.log("contacto en blanco" )
      return 
    }
    if (contactId) {
      await actions.updateContact(contactId, fullName, email, phone, address );
    }
    else {
      await actions.createNewContact({ fullName, email, phone, address });
        setCurrentContact("")
        setfullName("")
        setEmail("")
        setPhone("")
        setAddress("")
    }
    await actions.getContactsList()
    };
    return (
      <div className="container">
      <h1 className="display-4 text-center">{!currentContact ?
        "Add new contact" :
        "Updating contact "
      }</h1>
      {store.loading ?
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        :
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="htmlm-label">Full Name</label>
          <input
            name="fullName"
            placeholder="Full Name"
            type="text"
            className="htmlm-control w-100"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={fullName}
            onChange={(e) => setfullName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="htmlm-label">Email address</label>
          <input
            name= "email"
            placeholder="Email address"
            type="text"
            className="htmlm-control w-100"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="htmlm-label">Phone</label>
          <input
            name= "phone"
            placeholder="Enter phone"
            type="number"
            className="htmlm-control w-100"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="htmlm-label">Enter address</label>
          <input
            name= "address"
            placeholder="Enter address"
            type="text"
            className="htmlm-control w-100"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            />
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
        <Link to="/home">
          <button type="button" className="btn btn-link p-0">or get back to contacts</button>
        </Link>
      </form>
}
    </div>
    
  );
};
