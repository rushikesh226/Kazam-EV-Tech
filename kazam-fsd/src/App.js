import './App.css';
import AllTasks from './Pages/AllTasks';
import Home from './Pages/Home';
import {Route,Routes, useNavigate } from 'react-router-dom';
import ImportantTasks from './Pages/ImportantTasks';
import CompletedTasks from './Pages/CompletedTasks';
import IncompleteTasks from './Pages/IncompleteTasks';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authActions } from './Store/auth';

function App() {
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
  const navigate = useNavigate();
  const dispatch=useDispatch();
    useEffect(() => {
      if(localStorage.getItem("id") && localStorage.getItem("token")){
        dispatch(authActions.login());
      }
        else if (isLoggedIn===false) {
            navigate("/signup");
        }
    }, []);
  return (
    <div className="bg-gray-900 text-white h-screen p-2 relative">
      <Routes>
        <Route exact path="/" element={<Home/>}>
        <Route index element={<AllTasks/>}></Route>
        <Route path="/importantTasks" element={<ImportantTasks/>}></Route>
        <Route path="/completedTasks" element={<CompletedTasks/>}></Route>
        <Route path="/incompleteTasks" element={<IncompleteTasks/>}></Route>
        </Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
