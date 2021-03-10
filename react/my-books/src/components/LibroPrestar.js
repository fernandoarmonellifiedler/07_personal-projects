import React, { useState } from 'react';

const LibroPrestar = ({
  libros,
  setLibros,
  personas,
  prestarModal,
  setPrestarModal,
  id,
}) => {
  const [persona, setPersona] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (persona) {
      const libroSelected = libros.find((unLibro) => unLibro.id == id);
      // check si ya esta prestado
      if (libroSelected.persona_id !== null) {
        return window.alert('Este libro ya se encuentra prestado!');
      }

      // check si persona existe
      const findPersona = personas.find(
        (unaPersona) => unaPersona.id == persona
      );
      if (!findPersona) {
        return window.alert('Ese Id de persona no existe');
      }

      const prestarLibro = {
        id: id,
        nombre_libro: libroSelected.nombre_libro,
        descripcion: libroSelected.descripcion,
        categoria_id: libroSelected.categoria_id,
        persona_id: persona,
      };

      const newLibros = libros.map((unLibro) =>
        unLibro.id === id ? prestarLibro : unLibro
      );

      setLibros(newLibros);
      setPersona('');
      setPrestarModal(!prestarModal);
    } else {
      window.alert('No puedes ingresar valores en blanco');
    }
  };

  return (
    <>
      <section className='cat-modal'>
        <header>
          <h3 className='cat-edit-h3'>Prestar libro</h3>
          <button
            className='btn cat-edit-btn'
            onClick={() => setPrestarModal(!prestarModal)}
          >
            X
          </button>
        </header>
        <form className='form cat-modal-form'>
          {/* Persona */}
          <p>Ingresar el Id de la persona a prestar:</p>
          <div className='form-control'>
            <label htmlFor='libro-persona'>Prestar a: </label>
            <input
              type='text'
              id='libro-persona'
              name='libro-persona'
              value={persona}
              onChange={(e) => setPersona(e.target.value)}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>
            Prestar Libro
          </button>
        </form>
      </section>
    </>
  );
};

export default LibroPrestar;
