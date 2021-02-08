import React from 'react';

const ItemComponent = () => {
  let title = 'random title';

  return (
    <React.Fragment>
      <div className='item'>
        <h2>{title}</h2>
        <img src='../public/img0' alt='' />
      </div>
    </React.Fragment>
  );
};

export default ItemComponent;
