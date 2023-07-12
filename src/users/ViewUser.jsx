import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const ViewUser = () => {

  const [user, setUser] = useState({
    name : '',
    username : '',
    email : ''
  })

  const { id } = useParams();

  const loadUser = async() => {
    const result = await axios.get(`http://localhost:8080/user/${id}`, user);
    setUser(result.data);
  }

  useEffect(() => {loadUser();}, user);

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">정보 확인</h2>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                이름
              </label>
              <input type="text" id="name" value={user.name} className="form-control" readOnly="readOnly" name="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                유저네임
              </label>
              <input type="text" id="username" value={user.username} className="form-control" readOnly="readOnly" name="username"/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                이메일
              </label>
              <input type="text" id="email" value={user.email} className="form-control" readOnly="readOnly" name="email" />
            </div>
            <div className="mb-3 text-center">
              <Link to="/" className="btn btn-outline-primary px-3 mx-2">목록으로</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ViewUser;