import Title from './Components/Title/Title';
import Paragraph from './Components/Paragraph/Paragraph';
import Card01 from './Components/Card01/Card01';
import Card02 from './Components/Card02/Card02';
import Card03 from './Components/Card03/Card03';
import './App.css';

function App() {
  return (
    <div className="container">
      <Title />
      <Paragraph />

      <section className="cards">
        <Card01 />
        <Card02 />
        <Card03 />
      </section>
    </div>
  );
}

export default App;
