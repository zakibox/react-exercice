import React from 'react'

function Table({handleEditClick,users}) {
  return (
    <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>id</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nom}</td>
              <td>{user.prenom}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => handleEditClick(user)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default Table