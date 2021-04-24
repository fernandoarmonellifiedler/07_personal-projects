const Aside = ({data}) => {
  return (
    <aside>
      <h3>Menu</h3>
      <ul>
        {data
          .map((item) => item.categoria)
          .filter((item, index, arr) => {
            return arr.indexOf(item) == index;
          })
          .map((item) => (
            <li>{item}</li>
          ))}
      </ul>
    </aside>
  );
};

export default Aside;
