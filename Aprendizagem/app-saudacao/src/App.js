import './App.css';
import Main from './paginas/main';

function App() {
  return (
    <div className="App">
      <Main teste={new Date()} ></Main>
      <Main teste='2020-09-24 06:54:30' ></Main>
      <Main teste='2020-09-25 12:54:30' ></Main>
      <Main teste='2020-09-26 18:54:30' ></Main>
    </div>
  );
}

export default App;
