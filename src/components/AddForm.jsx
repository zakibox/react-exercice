import React, { useState } from 'react';

function AddForm({ addUser, lastId }) {  // {props1,props2}
  const [nom, setNom] = useState(''); //john
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent formulaire a soumettre sans valider les inputs 

    if (!nom || !prenom || !email || !status) { // && => et => and || or => ou
      alert('Please provide a nom, prenom, email, and status');
      return;
    }


    const newUser = {
      id: lastId + 1,
      nom,
      prenom,
      email,
      status
    };

    addUser(newUser);

    // mise a niveau les inputs
    setNom('');
    setPrenom('');
    setEmail('');
    setStatus('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}> {/*onsubmit est une evenement qui trigger lorsqu'on soumet une formulaire
      <h3>Add User</h3>
      {/* <label>Nom: </label>
        <input
          type="text"
          placeholder="Enter nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required // required signifie que je peux pas soumettre la formulaire lorsque la case input reste vide 
        /> */}
      <div class="form-floating mb-3 w-50">
        <input type="text" class="form-control" id="floatingInput" placeholder="entrer un nom convenable"
          value={nom}
          onChange={(e) => setNom(e.target.value)} required /> 
        <label for="floatingInput">Nom</label>
      </div>
      <div class="form-floating mb-3 w-50">
        <input type="text" class="form-control" id="floatingPassword" placeholder="entrer un prenom convenable"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)} required />
        <label for="floatingPassword">prenom</label>
      </div>
      <div class="form-floating mb-3 w-50">
        <input type='email' class="form-control" id="floatingPassword" placeholder="entrer un email convenable"
        value={email}
        onChange={(e) => setEmail(e.target.value)} required />
        <label for="floatingPassword">email</label>
      </div>
      <div class="form-floating mb-3 w-50">
        <input type='text' class="form-control" id="floatingPassword" placeholder="entrer un status convenable"
        value={status}
        onChange={(e) => setStatus(e.target.value)} required />
        <label for="floatingPassword">status</label>
      </div>
      
      <button type="submit" className='btn btn-primary'>
        Add User
      </button>
    </form>
  );
}

export default AddForm;
