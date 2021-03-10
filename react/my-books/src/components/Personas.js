import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PersonaEdit from './PersonaEdit'

const Personas = ({ personas, setPersonas, libros }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [alias, setAlias] = useState('');
  const [email, setEmail] = useState('');
  // modal
  const [editModal, setEditModal] = useState(false);
  // libro selected (edit)
  const [personaId, setPersonaId] = useState('');

  // ADD nueva persona
  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre && apellido && alias && email) {
      // check si existe email
      const findEmail = personas.find(
        (unaPersona) => unaPersona.email == email.toUpperCase()
      );
      if (findEmail) {
        return window.alert('Ese email ya se encuentra registrado!');
      }
      // add nueva persona
      const newPersona = {
        id: nanoid(),
        nombre: nombre.toUpperCase(),
        apellido: apellido.toUpperCase(),
        alias: alias.toUpperCase(),
        email: email.toUpperCase(),
      };

      setPersonas([...personas, newPersona]);

      setNombre('');
      setApellido('');
      setAlias('');
      setEmail('');
    } else {
      window.alert('Todos los campos son obligatorios');
    }
  };

  const handleDelete = (e) => {
    const personaId = e.target.value;

    // check si tiene libros
    const findLibro = libros.find((unLibro) => unLibro.persona_id == personaId);
    if (findLibro) {
      return window.alert(
        'Debes devolver el libro para poder borrar este usuario'
      );
    }
    // delete
    const newPersonas = personas.filter(
      (unaPersona) => unaPersona.id !== personaId
    );
    setPersonas(newPersonas)
  };

  const handleEdit = (e) => {
    const personaId = e.target.value;
    setPersonaId(personaId);
    setEditModal(!editModal);
  };

  return (
    <section className='section'>
      <h2>Personas</h2>

      <form className='form' onSubmit={handleSubmit}>
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
        <button type='submit'>Agregar persona</button>
      </form>

      {editModal && (
        <PersonaEdit
          personas={personas}
          setPersonas={setPersonas}
          editModal={editModal}
          setEditModal={setEditModal}
          id={personaId}
        />
      )}

      {personas.length !== 0 ? (
        personas.map((unaPersona) => {
          const { id, nombre, apellido, alias, email } = unaPersona;

          const tieneLibros = libros.filter(
            (unLibro) => unLibro.persona_id == id
          );

          return (
            <div className='item' key={id}>
              <div className='item-datos'>
                <p>Nombre: {nombre || 'sin nombre'}</p>
                <p>Apellido: {apellido || 'sin apellido'}</p>

                <p>Alias: {alias || 'sin alias'}</p>
                <p>Email: {email || 'sin email'}</p>
                <p>
                  {tieneLibros.length !== 0
                    ? 'Libros Prestados: ' +
                      tieneLibros.map((unLibro) => unLibro.nombre_libro)
                    : 'Libros Prestados: no tiene libros'}
                </p>
              </div>

              <div className='item-botones'>
                <p className='item-botones-id'>Id: {id}</p>
                <button className='btn' onClick={handleEdit} value={id}>
                  Editar
                </button>
                <button className='btn' onClick={handleDelete} value={id}>
                  Eliminar
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <h3>no hay personas registradas...</h3>
        </div>
      )}
    </section>
  );
};

export default Personas;
