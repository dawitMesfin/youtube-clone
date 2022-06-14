import './App.css';
import Header from './Header';
import RecomendedVideos from './RecomendedVideos';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';
import {
  BrowserRouter as Router,Routes,
  Route,
} from "react-router-dom";



function App() {


  return (
    <div className="App">
       <Header/>
       
       <div className='app-page'>
       <Sidebar/>
        
            <Routes>
              <Route path='/' element={<RecomendedVideos />} /> 
              <Route path='/search' element = {<SearchPage/>} />
            </Routes>   
           
         </div>
    </div>
  );
}

export default App;
