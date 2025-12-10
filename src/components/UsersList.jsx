// List rendering with users
// Display a list of users and add a delete button to remove any user from the list
//maintain a list of users. add user and remove user btn to manipulate users in list
// on each btn click a form element gets created to collect sufficient data
// add light and dark mode

import { useEffect, useState } from 'react';
import '../styles/usersList.css'

export default function UsersList(){
    const [users,setUsers] = useState([]);
    const [usrname,setusrname] = useState("");
    const [usrage,setusrage] = useState("");
    const [usrid,setusrid] = useState(100);
    const [action,setAction] = useState("");
    const [deleteId,setDeleteId] = useState("");
    const [toggleStatus,setToggleStatus] = useState(true);
    // toggleStatus is true when its light mode and false when its dark mode

    const addUser = () =>{
        setAction("add");
    }

    const removeUser = () =>{  
        if(users.length===0){
            alert("No user details in table");
            return;
        }
        setAction("remove");
        
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
    }

    const saveData = (name,age) =>{
        setUsers(prev=> [...prev,
            {id:usrid,
            username:name,
            userage:age}
            ]);
            setusrid(usrid+1);

            alert("User details saved to table");

            setusrname("");
            setusrage("");
            setAction("");
    }

    const removeData = (deleteId) =>{
        
        const newList = users.filter(usr=>usr.id===Number(deleteId));
        if(newList.length===0){
            alert("No users with this id");
            return;
        }

        setUsers(prev=> prev.filter(usr=>usr.id!==Number(deleteId)));
        setDeleteId("");
        setAction("");
    }

    useEffect(() => {
        document.body.style.backgroundColor = toggleStatus ? "#fff" : "#0C1821";
      }, [toggleStatus]);
      

    return(
        <div className="user-list-container"
        style={{
            boxShadow: toggleStatus ? "0.5px 0.5px 8px -4px #364156" : "0.5px 0.5px 8px -4px #fff",

        }}
        >

            {/* toggle dark/light mode */}
            <div className='user-list-toggle-container'>
                <img src={toggleStatus ? "https://img.icons8.com/?size=100&id=118932&format=png&color=000000" : "https://img.icons8.com/?size=100&id=118932&format=png&color=ffffff"} alt='light icon' className='user-list-icon' />
                <div className="user-list-toggle-element"
                onClick={()=>{
                    setToggleStatus(!toggleStatus);
                }}
                style={{
                    boxShadow: toggleStatus ? "#364156" : "0.5px 0.5px 5px 0px #CCC9DC"
                }}
                >
                    <button className="user-list-toggle-btn" 
                    // onClick={()=>{
                    //     setToggleStatus(!toggleStatus);
                    // }}
                    style={{float: toggleStatus ? "left" : "right"}}
                    ></button>
                </div>
                <img src={toggleStatus ? "https://img.icons8.com/?size=100&id=TMEWD76XezdX&format=png&color=000000" : "https://img.icons8.com/?size=100&id=TMEWD76XezdX&format=png&color=ffffff" } alt='dark icon' className='user-list-icon' />
            </div>
            {/* ***** */}
            <h3 className='user-list-h3'
            style={{
                color: toggleStatus ? "#1B2A41" : "#CCC9DC"
            }}
            >User List</h3>
            <div className="user-list-button-container">
                <button onClick={addUser}
                style={{
                    boxShadow: toggleStatus ? "#364156" : "0.5px 0.5px 5px 0px #CCC9DC"
                }}
                className='user-list-btn add-btn' >Add User</button>
                <button
                style={{
                    boxShadow: toggleStatus ? "#364156" : "0.5px 0.5px 5px 0px #CCC9DC"
                }}
                onClick={removeUser} className='user-list-btn' >Remove User</button>
            </div>

            {(users.length===0 && action==="") &&
                <p 
                style={{
                    color: toggleStatus ? "#1B2A41" : "#CCC9DC"
                }}
                className='empty-msg'>Oops! No users added to the list yet...</p>
            }

            <form onSubmit={handleSubmit}>
                {action==="add" &&
                    <>
                        <input type='text' placeholder='Name' className='input-feild' value={usrname}
                        onChange={(event)=>{
                            setusrname(event.target.value);
                        }}
                        />
                        <input type='number' placeholder='Age' className='input-feild' value={usrage}
                        onChange={(event)=>{
                            setusrage(event.target.value);
                        }}
                        />
                        <button
                        style={{
                            boxShadow: toggleStatus ? "#364156" : "0.5px 0.5px 5px 0px #CCC9DC"
                        }}
                        type='button' onClick={() =>saveData(usrname,usrage)} className='save-btn user-list-btn'>Add User</button>
                    </>
                }

                {/* delete user with id */}
                {(action==="remove" && users.length>0) &&
                    <>
                        <input type='number' placeholder='Enter user id to be deleted' className='input-feild' onChange={(event)=>{setDeleteId(Number(event.target.value))}} value={deleteId} />
                        <button
                        style={{
                            boxShadow: toggleStatus ? "#364156" : "0.5px 0.5px 5px 0px #CCC9DC"
                        }}
                        type='button' onClick={() =>removeData(deleteId)} className='save-btn user-list-btn'>Remove User</button>
                    </>
                }
                
            </form>
            {/* display list of users */}
            <div className="data-container">
                {
                    users.length>0 && 
                    <>
                    <h4 className='user-list-h4' style={{
                        color: toggleStatus ? "#1B2A41" : "#CCC9DC"
                    }}>User List</h4>
                    <table>
                        <thead
                        style={{
                            backgroundColor: toggleStatus ? "#CCC9DC" : "#324A5F",
                            color: toggleStatus ? "#0C1821" : "#CCC9DC"
                        }}>
                            <tr>
                                <th>User ID</th>
                                <th>Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(
                                usr=>
                                <tr key={usr.id}
                                style={{
                                    backgroundColor: toggleStatus ? "#fff" : "#CCC9DC"
                                }}>
                                    <td>{usr.id}</td>
                                    <td>{usr.username}</td>
                                    <td>{usr.userage}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    </>
                }
            </div>

        </div>
    );
}