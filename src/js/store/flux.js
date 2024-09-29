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

      createNewContact: async({ fullName, phone, email, address}) => {
        try {
          const response = await fetch("https://playground.4geeks.com/contact/agendas/marian/contacts", {
            method: "POST",
            headers: {
              "Content-Type":"aplication/json",
            },
            body: JSON.stringify({
            name: fullName,
            phone: phone,
            email: email,
            address: address
          }),
        });
        if (!response.ok) {
        const errorData = await response.json();
        console.error("Error:", errorData.error || "Unknown server error"); 
    
        alert(`Error creating contact: ${errorData.error || "Unknown error"}`);
        throw new Error("Server error creating contact"); 
        }
    
        const dataContacts = await response.json();
        console.log({ dataContacts });
        setStore({ contacts: dataContacts.contacts }); 
    
      } catch (error) {
        console.error("Error creating contact:", error); 
      }
    },

      updateContact:()=>{

      },
      deleteContact:()=>{
        
      }
    }
	};
};

export default getState;
