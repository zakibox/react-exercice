import React from 'react';

function UserForm({ name, setName, email, setEmail, isEditing, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div style={{ marginTop: '10px' }}>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit" style={{ marginTop: '10px' }}>
        {isEditing ? 'Update User' : 'Add User'}
      </button>
    </form>
  );
}

export default UserForm;
