import React, { useEffect } from "react";

export const UserContext = React.createContext();





const UserProvider = ({ children }) => {
    const [user, setUser] = React.useState([]);

    const getUser = async () => {

        try {
            const response = await fetch(
                "https://assets.breatheco.de/apis/fake/contact/agenda/Agenda_Jesus"
            );
            if (!response.ok) {
                console.error("error");
                return false;
            }
            const data = await response.json();
            setUser(data);
            return true;
        } catch (error) {
            console.error(error);

        }
    };




    const addNewContact = async (data) => {
        try {
            const response = await fetch(
                "https://assets.breatheco.de/apis/fake/contact/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }

            );
            if (!response.ok) {
                console.error("error");
                return false;
            }
            getUser();
        } catch (error) {
            console.error(error)
        }
    };

    const deleteContact = async (contact_id) => {
        try {
            const response = await fetch(
                `https://assets.breatheco.de/apis/fake/contact/${contact_id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
               
                }

            );
            if (!response.ok) {
                console.error("error");
                return false;
            }
           
            getUser();
        } catch (error) {
            console.error(error)
        }
    };


    return (


        <UserContext.Provider value={{ user, getUser, addNewContact, deleteContact }}>
            {children}
        </UserContext.Provider>

    );
};
export default UserProvider;