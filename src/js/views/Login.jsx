import React, { useContext, useEffect } from "react";



import { UserContext } from "../contexts/Context.jsx";
import Card from "../component/Card.jsx";
import { Link } from "react-router-dom";

const initialValue = {
  email: "",
  username: "",
  password: "",
};

const Login = () => {

 

  const { user,getUser } = useContext(UserContext);



  useEffect(() => {
    getUser()

  }, [])
  console.log(user)

  return (
 
 


   <div className="container"> 
   <div className="text-end my-4 "> 
  <Link to="/profile" className="btn btn-success p-2">Add new Contact</Link>
  </div>
  
 
  

{user.map(use => (<Card use={use} key={use.id}/>))}

</div>
 


   





  );
};

export default Login;




