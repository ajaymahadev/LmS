import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/login';
import Admin from './Components/admin';
import BookList from './Components/booklist';
import AddBook from './Components/AddBooks';
import Adduser from './Components/ajay';
import ReadBook from './Components/readbook';
import UserList from './Components/userlist';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Login/>} path='/'/>
          <Route element={<Admin/>} path='/admin'/>
          <Route element={<BookList/>} path='/booklist'/>
          <Route element={<AddBook/>} path='/addbooks'/>
          <Route element={<Adduser/>} path='/adduser'/>
          <Route element={<ReadBook/>} path='/booklist/:id'/>
          <Route element={<UserList/>} path='/userlist'/>
          
          
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
