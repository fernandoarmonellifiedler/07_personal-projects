import React, { useState } from 'react';

const CategoriaEdit = ({ id, categorias, setCategorias, modal, setModal }) => {
  const [nombre, setNombre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre) {
      // check si categoria existe
      if (
        categorias.find(
          (unaCategoria) => unaCategoria.nombre_categoria == nombre.toUpperCase()
        )
      ) {
        return window.alert('Esa categoria ya existe!');
      }

      // edit categoria
      const editCategoria = {
        id: id,
        nombre_categoria: nombre.toUpperCase(),
      };
      const newCategorias = categorias.map((unaCategoria) =>
        unaCategoria.id === id ? editCategoria : unaCategoria
      );

      setCategorias(newCategorias);
      setModal(!modal);
      setNombre('');
    } else {
      window.alert('No puedes ingresar valores en blanco');
    }
  };

  return (
    <section className='cat-modal'>
      <header>
        <h3 className='cat-edit-h3'>Editar categoría</h3>
        <button className='btn cat-edit-btn' onClick={() => setModal(!modal)}>
          X
        </button>
      </header>
      <form className='form cat-modal-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='categoria-nombre'>Nombre: </label>
          <input
            type='text'
            id='categoria-nombre'
            name='categoria-nombre'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <button type='submit'>Editar Categoría</button>
      </form>
    </section>
  );
};

export default CategoriaEdit;
