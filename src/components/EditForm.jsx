import React, { useState, useEffect } from 'react';

function FrmEdit({ handleEditSubmit, currentUser, isediting }) {
  const [nom2, setNom2] = useState('');
  const [prenom2, setPrenom2] = useState('');
  const [email2, setEmail2] = useState('');
  const [status2, setStatus2] = useState('');

  // Populate the form fields whenever idencours or isiditing changes
  useEffect(() => {
    if (currentUser && isediting) {
      setNom2(currentUser.nom);
      setPrenom2(currentUser.prenom);
      setEmail2(currentUser.email);
      setStatus2(currentUser.status);
    }
  }, [currentUser, isediting]);

  const onSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...currentUser,  
      nom: nom2,
      prenom: prenom2,
      email: email2,
      status: status2
    };
    handleEditSubmit(updatedUser);
  };

  // Render form
  if (!isediting) return null; 

  return (
    <div style={{ marginTop: '20px' }}>
      <form onSubmit={onSubmit} className="clform1" style={{ marginBottom: '20px' }}>
        <h2>Modifier l'utilisateur</h2>

        <div class="form-floating mb-3 w-50">
        <input type="text" class="form-control" id="floatingInput" placeholder="entrer un nom convenable"
          value={nom2}
          onChange={(e) => setNom2(e.target.value)}  />
        <label for="floatingInput">Nom</label>
      </div>

      <div class="form-floating mb-3 w-50">
        <input type="text" class="form-control" id="floatingInput" placeholder="entrer un nom convenable"
          value={prenom2}
          onChange={(e) => setPrenom2(e.target.value)}  />
        <label for="floatingInput">prenom</label>
      </div>

      <div class="form-floating mb-3 w-50">
        <input type="text" class="form-control" id="floatingInput" placeholder="entrer un nom convenable"
          value={email2}
          onChange={(e) => setEmail2(e.target.value)}  />
        <label for="floatingInput">Email</label>
      </div>

      <div class="form-floating mb-3 w-50">
        <input type="text" class="form-control" id="floatingInput" placeholder="entrer un nom convenable"
          value={status2}
          onChange={(e) => setStatus2(e.target.value)}  />
        <label for="floatingInput">status</label>
      </div>

        <button type="submit" className='btn btn-dark'>mettre a jour</button>
      </form>
    </div>
  );
}

export default FrmEdit;
