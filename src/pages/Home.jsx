import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Home() {
    const[users, setUsers] = useState([]);

    const loadUsers = async () => {
        const result = await axios.get('http://localhost:8080/users');
        console.log(result.data);
        setUsers(result.data);
    };

    // 처음 한 번 실행함
    useEffect(() => {loadUsers();}, []);

  return (
    <div className='container'>
        <table className="table border shadow my-4">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={user.name}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Home;