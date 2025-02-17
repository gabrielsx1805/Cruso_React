
import './App.css';
import ListRender from './components/ListRender';
import Test from './components/test'; // Se estiver em um arquivo chamado Test.js



function App() {
  return (
    <div className="App">
      <h1>Seção 3</h1>
      {/* imagem em Public*/ }
      <img src="/logo192.png" alt="" />

      {/* imagem em asset */}
      <Test/>
      <ListRender/>
      
    </div>
  );
}

export default App;
