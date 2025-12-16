import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import Magazine from './pages/Magazine';
import Blog from './pages/Blog';
import Itineraries from './pages/Itineraries';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article/:slug" element={<Article />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/itineraries" element={<Itineraries />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
