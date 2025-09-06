import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import AddUsers from './users/AddUsers'
import EditUsers from './users/EditUsers'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ViewUser from './users/ViewUser'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/viewuser" element={<ViewUser />} />
          <Route exact path="/adduser" element={<AddUsers />} />
          <Route exact path="/edituser/:id" element={<EditUsers />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
