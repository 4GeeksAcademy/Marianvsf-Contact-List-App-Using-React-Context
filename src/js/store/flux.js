const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
			]
		},
		actions: {
	
			getContactsList: async ()=>{
        let resp = await fetch("https://playground.4geeks.com/contact/agendas/marian", {
          method: "GET",
          headers: {
            "Content-Type":"aplication/json",
          }
        });

        if (resp.status === 404) {
          console.log("Agenda creada")
          await fetch("https://playground.4geeks.com/contact/agendas/marian",{        
            method: "POST", 
            headers: {
              "Content-Type":"aplication/json",
            }
        });
        }
      
        if (resp.ok) {
          let dataContacts = await resp.json();
          console.log( {dataContacts} )
          setStore( {contacts: dataContacts.contacts } )
        }
  
      },

      createNewContact: async ({ fullName, phone, email, address }) => {
        let resp = await fetch("https://playground.4geeks.com/contact/agendas/marian/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: fullName,
                phone: phone,
                email: email,
                address: address
            })
        });
        if (resp === 422) {
        console.error("Error:", errorData.error || "Unknown server error"); 
        }
        if (resp.ok) {
          const dataContacts = await resp.json();
          console.log({ dataContacts });
          setStore({ contacts: dataContacts.contacts }); 
        }
      },

      updateContact: async (contactId, fullName, phone, email, address ) => { 
        let resp = await fetch(`https://playground.4geeks.com/contact/agendas/marian/contacts/${contactId}`,{
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: fullName,
            phone: phone,
            email: email,
            address: address
        })
        });
        if (resp === 422) {
        console.error("Error:", errorData.error || "Unknown server error"); 
        }
        if (resp.ok) {
          const dataContacts = await resp.json();
          console.log({ dataContacts });
          setStore({ contacts: dataContacts.contacts }); 
        }
      },
      deleteContact:async ()=>{
        let resp = await fetch("https://playground.4geeks.com/contact/agendas/marian/${contactid}",{
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
        }
      });
      if (resp.ok) {
        const dataContacts = await resp.json();
        console.log("Contacto borrado con éxito");
        console.log({ dataContacts });
        setStore({ contacts: dataContacts.contacts }); 
      let confirmar = confirm("Are you sure?");
        if (confirmar) {
          alert("Oh no!");
        } else {
          alert("Yes baby!");
        }
    }
	}
},
}
}
export default getState;
