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
          await fetch("https://playground.4geeks.com/contact/agendas/marian",{        
            method: "POST", 
            headers: {
              "Content-Type":"aplication/json",
            }
        });
        }
      
        if (resp.ok) {
          console.log("Agenda creada")
          let dataContacts = await resp.json();
          console.log( {dataContacts} )
          setStore( {contacts: dataContacts } )
        }
  
      },
      createNewContact:()=>{

      },
      updateContact:()=>{

      },
      deleteContact:()=>{
        
      }
    }
	};
};

export default getState;
