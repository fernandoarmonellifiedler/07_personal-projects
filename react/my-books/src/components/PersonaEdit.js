import React, { useState } from 'react';

// COMPONENTE MODAL PARA EDITAR
const PersonaEdit = (props) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [alias, setAlias] = useState('');
  const [email, setEmail] = useState('');
  const personaSelected = props.state.listaPersonas.find(
    (unaPersona) => unaPersona.id == props.personaId
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (nombre && apellido && email && alias) {
        const editPersona = {
          nombre: nombre,
          apellido: apellido,
          email: email.toUpperCase(),
          alias: alias,
        };

        const findEmail = props.listaPersonas.find(
          (unaPersona) => unaPersona.email == editPersona.email
        );
        if (findEmail && findEmail.id != props.personaId) {
          return window.alert('Ese email ya se encuentra registrado!');
        }

        props.dispatch({ type: 'PERSONA_EDIT_ITEM', payload: editPersona });
        setNombre('');
        setApellido('');
        setEmail('');
        setAlias('');
        props.handleRender();
        props.handleModalEdit();
      } else {
        window.alert('No puedes ingresar valores en blanco');
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <section className='cat-modal'>
        <header>
          <h3 className='cat-edit-h3'>Editar persona</h3>
          <button className='btn cat-edit-btn' onClick={props.handleEdit}>
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
