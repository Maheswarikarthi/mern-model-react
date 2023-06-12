import {BrowserRouter as Router,Link,Routes,Route} from "react-router-dom";
import HomeComponent from "./Components/HomeComponent/HomeComponent";
import AboutUsComponent from "./Components/AboutUsComponent/AboutUsComponent";
import ContactUsComponent from "./Components/ContactUsComponent/ContactUsComponent";


function App()
{
  return(
    <Router>
    <div className="App">
      <ul>
        <li>
          <Link to ="/">Home</Link>
        </li>
        <li>
          <Link to ="/about">About Us</Link>
        </li>
        <li>
          <Link to ="/contact">Contact Us</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path='/' element={<HomeComponent/>}></Route>
        <Route exact path='/about' element={<AboutUsComponent/>}></Route>
        <Route exact path='/contact' element={<ContactUsComponent/>}></Route>
      </Routes>
    </div>
    </Router>
  )
}
export default App;