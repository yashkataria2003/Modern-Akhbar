import React, {useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import backgroundImage from './assets/News_background.jpg';

const App = () => {
  const pageSize = 9;
  // const apiKey = process.env.REACT_APP_MY_API_KEY;
  const apiKey = "390a2960a3f24c5ea7354cbfdbd54d66"
  const [progress, updateProgress] = useState(0)

  return (
    <div className="bg-fixed bg-cover bg-no-repeat h-fit" style={{ backgroundImage: `url(${backgroundImage})`}}>
        <Router>
        <Navbar className="sticky top-0 z-50"/>
        <LoadingBar color='#f11946' progress={progress} />
        <Routes>
          <Route exact path='/' element={<News apiKey={apiKey} updateProgress={updateProgress} key="general" pageSize={pageSize} country="in" category="general" />}></Route>
          <Route exact path='/general' element={<News apiKey={apiKey} updateProgress={updateProgress} key="general" pageSize={pageSize} country="in" category="general" />}></Route>
          {/* <Route exact path='/business' element={<News apiKey={apiKey} updateProgress={updateProgress} key="business" pageSize={pageSize} country="in" category="business" />}></Route> */}
          <Route exact path='/entertainment' element={<News apiKey={apiKey} updateProgress={updateProgress} key="entertainments" pageSize={pageSize} country="in" category="entertainment" />}></Route>
          <Route exact path='/health' element={<News apiKey={apiKey} updateProgress={updateProgress} key="health" pageSize={pageSize} country="in" category="health" />}></Route>
          <Route exact path='/science' element={<News apiKey={apiKey} updateProgress={updateProgress} key="science" pageSize={pageSize} country="in" category="science" />}></Route>
          <Route exact path='/sports' element={<News apiKey={apiKey} updateProgress={updateProgress} key="sports" pageSize={pageSize} country="in" category="sports" />}></Route>
          <Route exact path='/technology' element={<News apiKey={apiKey} updateProgress={updateProgress} key="technology" pageSize={pageSize} country="in" category="technology" />}></Route>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
