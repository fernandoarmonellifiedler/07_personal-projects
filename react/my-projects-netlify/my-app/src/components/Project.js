import React, { useState } from 'react';

const Project = ({ img, name, link }) => {

  return (
    <>
      <div className='item'>
        <h2>{name}</h2>
        <img src={img} alt={name} />
        <a href={link} >Go to Project</a>
      </div>
    </>
  );
};

export default Project;