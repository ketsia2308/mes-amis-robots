import './App.css';
import Images from './Images';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Fetch = () => {
    const [users, setUsers] = useState([])
    const inputRef = useRef();
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((Response) => {
          return Response.json()
        })
        .then((result) => {
          setUsers(result)
        })
    }, []);
  
    const searchValue = function () {
      const text = inputRef.current.value;
      if (text.length >=3) {
        let results = users.filter((user) => {
          return user.name.toLowerCase().indexOf(text.toLowerCase()) !== -1;
        });
        setUsers(results)
      }else{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((Response) => {
          return Response.json()
        })
        .then((result) => {
          setUsers(result)
        })
      }
    };
    return (
      <div className='App'>
        <input ref={inputRef} onChange={searchValue} placeholder="Rechercher par nom"/>
       
       <div className='container'>
          {users.map(({ id, name, email }) => 
          <Link className='link-line' to={`details/${id}`}>
            <Images email={email} id={id} nom={name} />
          </Link>)}
        </div>
      </div>
    );
}
 
export default Fetch;