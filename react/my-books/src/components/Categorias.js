import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import CategoriaEdit from './CategoriaEdit';

const Categorias = ({ categorias, setCategorias, libros }) => {
  const [nombre, setNombre] = useState('');
  const [modal, setModal] = useState(false);
  const [catId, setCatId] = useState('');
  const [index, setIndex] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // check si categoria existe
    if (
      categorias.find(
        (unaCategoria) => unaCategoria.nombre_categoria == nombre.toUpperCase()
      )
    ) {
      return window.alert('Esa categoria ya existe!');
    }
    // add categoria
    if (nombre) {
      const newCategoria = {
        id: nanoid(),
        nombre_categoria: nombre.toUpperCase(),
      };
      setCategorias([...categorias, newCategoria]);
      setNombre('');
    } else {
      window.alert('No puedes ingresar valores en blanco');
    }
  };

  // remove categoria
  const handleRemove = (e) => {
    const categoriaId = e.target.value;
    
    // check si tiene libros asociados
    if (
      libros.find((unLibro) => unLibro.categoria_id == categoriaId)
    ) {
      return window.alert('Esa categoria aun tiene libros asociados!');
    }

    const newCategorias = categorias.filter(
      (unaCategoria) => unaCategoria.id !== categoriaId
    );
    setCategorias(newCategorias);
  };

  // edit categoria
  const handleEdit = (e) => {
    setModal(!modal);
    setCatId(e.target.value);
  };

  return (
    <section className='section'>
      <h2>Categorias</h2>

      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control categoria-form'>
          <label htmlFor='categoria-nombre'>Nombre: </label>
          <input
            type='text'
            id='categoria-nombre'
            name='categoria-nombre'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <button type='submit'>Agregar Categoría</button>
      </form>

      {modal && (
        <CategoriaEdit
          id={catId}
          categorias={categorias}
          setCategorias={setCategorias}
          modal={modal}
          setModal={setModal}
        />
      )}

      {categorias.length !== 0 ? (
        categorias.map((unaCategoria) => {
          const { id, nombre_categoria } = unaCategoria;

          return (
            <div className='item' key={id}>
              <div className='item-datos'>
                <h4>{nombre_categoria}</h4>
                <p>ID: {id}</p>
              </div>

              <div className='item-botones'>
                <button className='btn' onClick={handleEdit} value={id}>
                  Editar
                </button>
                <button className='btn' onClick={handleRemove} value={id}>
                  Borrar
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <h3>no hay categorias registradas...</h3>
        </div>
      )}
    </section>
  );
};

export default Categorias;
