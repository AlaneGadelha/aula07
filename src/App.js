import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Pokemon from './pages/Pokemon';
import Home from './pages/Home';
import Menu from './componentes/Menu';
import Posts from './pages/Posts';

function App() {
  return (
    <>

      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path='/' element ={<Home/>}></Route>
          <Route path='/pokemon' element ={<Pokemon/>}></Route>
          <Route path='/posts' element ={<Posts/>}></Route>
          <Route path='/posts/:id' element ={<Posts/>}></Route>
          <Route path='*' element ={<Pagina/>}></Route>
        </Routes>
      </BrowserRouter>
      
        
    </>
  );
}

export default App;
