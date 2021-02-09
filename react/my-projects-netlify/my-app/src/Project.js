import React from 'react';

const List = ({ projects }) => {
  return (
    <>
      <section className='projects'>
        {projects.map((project) => {
          const { id, name, img, link } = project;

          return (
            <article key={id} className='item'>
              <img src={img} alt={name} />
              <h4>{name}</h4>
              <a href={link}>Go to Project</a>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default List;
