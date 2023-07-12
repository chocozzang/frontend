import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export const EditUser = () => {
  let navigate = useNavigate();
  // navigate 객체 생성

  const [user, setUser] = useState({
    name     : '',
    username : '',
    email    : ''
  });

  //"/user/:id" 의 값이 "/user/123" 이면 id의 값으로 123을 받음
  const { id } = useParams();

  // await사용시 async을 함수 앞에 붙임
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    // console.log(result.data);
    setUser(result.data);
  };

  // 처음 한 번 실행함
  useEffect(() => {loadUser();}, user);

  const onInputChange = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      // 각 name에 대한 value의 값 변화를 감지하여
      // 해당 name 속성의 값을 value로 변경함
      // 즉, e.target.name에 맞는 속성을 e.target.value로 세팅함
      [e.target.name] : e.target.value
    });
  };

  // 구조 분해 할당
  const {name, username, email} = user;

  const onSubmit = async (e) => {
    e.preventDefault(); // submit 기능 중지시킴
    // 백엔드 서버로 user 데이터 전송
    await axios.put(`http://localhost:8080/user/${id}`, user);
    // ** await : 요청에 대한 처리 결과를 기다릴 수 있도록 함 **
    navigate('/');
    // 바로 홈페이지로 이동시키도록 함 (홈페이지는 리스트를 조회하므로 등록된 유저 역시 나타남)
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">수정 하기</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                이름
              </label>
              <input type="text" id="name" value={name} onChange={onInputChange} className="form-control" 
              placeholder="이름 입력" name="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                유저네임
              </label>
              <input type="text" id="username" value={username} onChange={onInputChange} className="form-control" 
              placeholder="유저네임 입력" name="username" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                이메일
              </label>
              <input type="text" id="email" value={email} onChange={onInputChange} className="form-control" 
              placeholder="이메일 입력" name="email" required />
            </div>
            <div className="mb-3 text-center">
              <button type="submit" className="btn btn-outline-primary px-3 mx-2">수정</button>
              <Link to="/" className="btn btn-outline-danger px-3 mx-2">취소</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditUser;
