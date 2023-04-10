import React, { useEffect, useState } from "react";

export const UserContext = React.createContext();





const UserProvider = ({ children }) => {
    const [user, setUser] = React.useState([]);
    const [userEdit, setUserEdit] = useState(null);

    const updateUserEdit = (id) => {
        console.log(id)
        setUserEdit (id)
    }

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

    const deleteContact = async () => {
        console.log(userEdit)
        try {
            const response = await fetch(
                `https://assets.breatheco.de/apis/fake/contact/${userEdit}`,
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
            setUserEdit(null);
        } catch (error) {
            console.error(error)
        }
    };
    const editContact = async (contact_id, data) => {
        try {
            const response = await fetch(`https://assets.breatheco.de/apis/fake/contact/${contact_id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"

                    },
                    body: JSON.stringify(data)

                }
            )
            if (!response.ok) {
                console.error("error");
                return false;
            }
            getUser();
            setUserEdit(null)

            return true;
        } catch (error) {
            console.error(error)

        }

    }
    const handleEdit = (contact) => {
        if (userEdit !== null ){
            editContact ( userEdit, contact)
            return;
        }
        addNewContact(contact);
    }


    return (


        <UserContext.Provider value={{ user, getUser, deleteContact, editContact, handleEdit, updateUserEdit }}>
            {children}
        </UserContext.Provider>

    );
};
export default UserProvider;