import './App.css';
import Cards from './Components/Cards/Cards';
import axios from "axios";
import { useState, useEffect } from "react";
import Search from '../src/Components/Search/search'



function App() {

  const [orginalData, setOrginalData] = useState([])
  const [tempSearch, setTempSearch]=useState([])
  
  useEffect(async() => {
    await axios.get('https://www.omdbapi.com/?apikey=45f0782a&s=war')
      .then(movies =>{
        setOrginalData(movies.data.Search)
       setTempSearch(movies.data.Search)})
  }, [])

  return (<>
  <Search
  tempSearch={tempSearch}
  setTempSearch={setTempSearch}
  data={orginalData}
  setData={setOrginalData}/>
    <div className="main-card">
      {tempSearch.map(({ Title, Year, imdbID, Type, Poster }) => <Cards
        Title={Title}
        Year={Year}
        imdbID={imdbID}
        Type={Type}
        Poster={Poster}/>)}
    </div>
  </>
  );
}

export default App;
