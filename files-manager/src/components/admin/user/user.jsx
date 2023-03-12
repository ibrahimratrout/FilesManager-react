import { useState, useEffect } from 'react';
import axiosClient from '../../../axios';
import "./style.scss";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosClient.get('/report-user')
      .then(response => {
        console.log(response.data)
        setUsers(response.data.users);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const deleteUser = (userId) => {
    console.log(userId)

    
    axiosClient.delete(`/delete-user/${userId}`)
      .then(response => {
        console.log(response.data);
        setUsers(users.filter(user => user.id !== userId));
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className='contener'>
      <div class="row" id ="title">
        <div  class="col-md-10">
          <h3>User List</h3>
        </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col" >Created At</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>

          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.created_at}</td>
              <td>
              <Link to="" onClick={() => deleteUser(user.id)}>
                <div class="delete">
                  <DeleteIcon />
                </div>
              </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
