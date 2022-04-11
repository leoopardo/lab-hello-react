import './App.css';
import SayHello from './content/body/body';
import Header from './content/header/header';
import Declarative from './content/main/Declarative';
import Components from './content/main/Components';
import Single from './content/main/Single-Way';
import JSX from './content/main/JSX';

function App() {
  return (
    <div className="App">
      <Header />
      <SayHello />
      <div className='mainSec'>
        <Declarative />
        <Components />
        <Single />
        <JSX />
      </div>
    </div>
  );
}

export default App;
