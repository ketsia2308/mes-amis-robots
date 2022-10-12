import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams} from "react-router-dom";
import './App.css'

function DetailRobots(){
    const [users, setUsers] = useState([]);
    const {id} = useParams();

    const detailDatafetch = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((Response) => {
          return Response.json()
        })
        .then((result) => {
          result.map((item) =>{
            if(item.id == id) {
                setUsers(item)
            }
          })
        })
    }
    useEffect(() =>{
        detailDatafetch()  
    }, [])

    return(
        <>
                    <div className="card-details">
                        <img alt='imageRobots' src={`https://robohash.org/${users.id}`} />
                        <div>
                            <h2>{users.name}</h2>
                            <h2>{users.email}</h2>
                            <h2>{users.website}</h2>
                            <h2>{users.phone}</h2>
                            <h2>{users?.address?.city}</h2>
                            <h2>{users?.address?.suite}</h2>
                        </div>
                    </div>    
                    <Link className="boutton" to={'/'}><h5>Retour</h5></Link>       
        </>
    )
}

export default DetailRobots;