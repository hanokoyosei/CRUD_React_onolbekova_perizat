import React from 'react'

const UserTable = props => {

  const handleDeleteUser = id => {
    props.deleteUser(id)
  }
  return (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>
              <button 
                className="btn btn-outline-success m-1"
                onClick={() => {
                  props.editRow(user)
                }}
                >Edit
              </button>
              <button 
                className="btn btn-outline-danger"
                onClick={() => handleDeleteUser(user.id)}
                >Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
  )
}

export default UserTable;