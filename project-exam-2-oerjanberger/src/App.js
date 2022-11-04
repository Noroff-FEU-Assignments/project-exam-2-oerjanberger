import './sass/styles.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import { AuthProvider } from "./components/context/AuthContext";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import MyProfile from "./components/pages/MyProfile";
import PostList from "./components/pages/PostList";
import ProfileList from "./components/pages/ProfileList";
import SpecificPost from "./components/pages/SpecificPost";
import SpecificProfile from "./components/pages/SpecificProfile";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navigation />

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/userprofile/:name" element={<MyProfile />} />
            <Route path="/postList" element={<PostList />} />
            <Route path="/profileList" element={<ProfileList />} />
            <Route path="/post/:id" exact element={<SpecificPost />} />
            <Route path="/profiles/:name" exact element={<SpecificProfile />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};
