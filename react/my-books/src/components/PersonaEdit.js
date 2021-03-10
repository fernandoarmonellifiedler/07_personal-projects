import React, { useState } from 'react';

const PersonaEdit = ({
  personas,
  setPersonas,
  editModal,
  setEditModal,
  id,
}) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [alias, setAlias] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // check si existe email
      const findEmail = personas.find(
        (unaPersona) => unaPersona.email == email.toUpperCase()
      );
      if (findEmail) {
        return window.alert('Ese email ya se encuentra registrado!');
      }
    }
      const personaSelected = personas.find((unaPersona) => unaPersona.id == id);

      const editPersona = {
        id: id,
        nombre: nombre.toUpperCase() || personaSelected.nombre,
        apellido: apellido.toUpperCase() || personaSelected.apellido,
        email: email.toUpperCase() || personaSelected.email,
        alias: alias.toUpperCase() || personaSelected.alias,
      };

      const newPersonas = personas.map((unaPersona) =>
        unaPersona.id === id ? editPersona : unaPersona
      );

      setPersonas(newPersonas);
      setNombre('');
      setApellido('');
      setEmail('');
      setAlias('');
      setEditModal(!editModal);
  };

  return (
    <>
      <section className='cat-modal'>
        <header>
          <h3 className='cat-edit-h3'>Editar persona</h3>
          <button className='btn cat-edit-btn' onClick={() =>  setEditModal(!editModal)}>
            X
          </button>
        </header>
        <form className='form cat-modal-form' onSubmit={handleSubmit}>
          {/* nombre*/}
          <div className='form-control'>
            <label htmlFor='persona-nombre'>Nombre: </label>
            <input
              type='text'
              id='persona-nombre'
              name='persona-nombre'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          {/* apellido */}
          <div className='form-control'>
            <label htmlFor='persona-apellido'>Apellido: </label>
            <input
              type='text'
              id='persona-apellido'
              name='persona-apellido'
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
          {/* alias */}
          <div className='form-control'>
            <label htmlFor='persona-alias'>Alias: </label>
            <input
              type='text'
              id='persona-alias'
              name='persona-alias'
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
            />
          </div>
          {/* email */}
          <div className='form-control'>
            <label htmlFor='persona-email'>Email: </label>
            <input
              type='text'
              id='persona-email'
              name='persona-email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit'>Editar Persona</button>
        </form>
      </section>
    </>
  );
};

export default PersonaEdit;
