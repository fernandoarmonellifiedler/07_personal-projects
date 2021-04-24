import List from './Project';

const Section = ({ projects }) => {
  return (
      <section className='container'>
      <h1>Fernando Armonelli Fiedler</h1>
        <h2>my projects</h2>
        <List projects={projects} />
      </section>
  );
};

export default Section;
