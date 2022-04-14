import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/contacts-list" element={<Main />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/edit" element={<EditPage />} />
    </Routes>
  );
}

export default App;
