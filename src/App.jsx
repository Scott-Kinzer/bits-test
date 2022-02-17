import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Layout from './components/Layout/Layout';
import {Routes, Route} from 'react-router-dom'
import Book from './components/Book/Book';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/detailsBook" element={<Book />} />

        </Route>
      </Routes>

    </div>
  );
}

export default App;
