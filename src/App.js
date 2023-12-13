
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import ListOfData from "./components/ListOfData";


function App() {
  return(
<Router>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/listOfData" element={<ListOfData/>}/>
  </Routes>
</Router>
  )
}

export default App;
