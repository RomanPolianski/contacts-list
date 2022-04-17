import './App.css';
import { Route, Routes } from 'react-router-dom';
import EditPage from './Components/EditPage/EditPage';
import CreatePage from './Components/CreatePage/CreatePage';
import Content from './Components/Content/Content';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

function App() {
  return (
    <Routes>
      <Route path="/contacts-list" element={<Content />} />
      <Route path="/" element={<Main />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/edit" element={<EditPage />} />
    </Routes>
  );
}

function Main() {
  return <Content />;
}

export default App;
