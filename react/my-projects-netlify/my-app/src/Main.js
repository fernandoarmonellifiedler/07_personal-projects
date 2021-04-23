import List from './Project';

const Main = ({ projects }) => {
  return (
    <main>
      <section className='container'>
        <h1>Fernando Armonelli Fiedler</h1>
        <h3>my projects</h3>
        <List projects={projects} />
      </section>
    </main>
  );
};

export default Main;
