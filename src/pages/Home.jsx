import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

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
                <th scope="col">이름</th>
                <th scope="col">유저명</th>
                <th scope="col">이메일</th>
                <th scope="col">액션</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={user.name}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to="/viewUser" className="btn btn-outline-secondary mx-2">보기</Link>
                            <Link to={`/editUser/${user.id}`} className="btn btn-outline-warning mx-2">수정</Link>
                            {/* `/editUser/${user.id}`를 해두면, App.js의 Route에 매핑됨 */}
                            <Link to="/" className="btn btn-outline-da mx-2">삭제</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Home;