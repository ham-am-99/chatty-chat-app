import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";
export default function Conversation({conversation,currentUser}) {
const [user,setUser]=useState(null);
    
    useEffect(()=>{
        console.log("hello members");
       
        const friendId=conversation?.members.find((m) => m !== currentUser._id);
        const getUser = async ()=>{
            try{
                const res = await axios("api/users?userId="+friendId);
                console.log("hello members");
                 
              setUser(res.data)
               console.log(res.data);
               


            }
            catch(err){
                console.log(err);

            }
           
        };
      
       
        getUser();
      }
      ,[currentUser,conversation])

    return(
        <div className="conversation">
            <img className="conversationImg" src="https://i.pinimg.com/736x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg" alt=""/>
            <span className="conversationName"> {user?.username}</span>
            

        </div>
    )
}