import './App.css';
import AllTasks from './Pages/AllTasks';
import Home from './Pages/Home';
import {Route,Routes } from 'react-router-dom';
import ImportantTasks from './Pages/ImportantTasks';
import CompletedTasks from './Pages/CompletedTasks';
import IncompleteTasks from './Pages/IncompleteTasks';

function App() {
  return (
    <div className="bg-gray-900 text-white h-screen p-2">
      <Routes>
        <Route exact path="/" element={<Home/>}>
        <Route index element={<AllTasks/>}></Route>
        <Route path="/importantTasks" element={<ImportantTasks/>}></Route>
        <Route path="/completedTasks" element={<CompletedTasks/>}></Route>
        <Route path="/incompleteTasks" element={<IncompleteTasks/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
