import React from "react";
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

import './App.css';  // <link to...> a tag ine denk gelir!!

function App() {
  return (
    
<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            
        <Routes>

          <Route path="/" element={<Home/>} />

          <Route path="/about" Component={About} /> 
            
          <Route path="/users" element={<Users/>} />
          
          
          
        </Routes>
      </div>
    </Router>
  );
}
// in Route tag Component used instead of element. Component ile element arasında fark var. Component ile bir component çağırırken element ile bir JSX elementi çağırıyoruz. Yani <Home/> gibi.
// <Switch> yerine <Routes> kullanılıyor. <Switch> 6.0 sürümünden sonra kaldırıldı.
// The followings componnents in folder src one Folder can be regulated
// Components can be imported from other files and used here.

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


export default App;

