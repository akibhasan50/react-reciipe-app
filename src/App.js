import {useEffect,useState} from 'react';
import './App.css';
import Recipe from './components/Recipe';

function App() {
 const APP_ID = 'a7235dd6'
 const APP_KEY = '6b83922767d5c31b235e4fe3fbada81f'

 const [recippe, setRecippe] = useState([])
 const [search, setSearch] = useState('')
 const [searchVal, setSearchVal] = useState('chicken')
useEffect(() => {
  getRrecipe()
},[searchVal])

const getRrecipe = async() =>{
  const res = await fetch(`https://api.edamam.com/search?q=${searchVal}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = await res.json();
  setRecippe(data.hits)
  
}
const handleChange =(e) =>{
  setSearch(e.target.value)
}
const getSearch =(e) =>{
 e.preventDefault()
 setSearchVal(search)

 setSearch((''))
 
}
  return (
  
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input onChange={(e) =>handleChange(e)} className="search-bar" type="text" value={search}></input>
        <button  className="search-button" type="submit">search</button>
      </form>

     <div className="recipes">
          {
                recippe.length > 0 ?
                      recippe.map((recipe,i) =>{
                        
                      return <Recipe key={i} title={recipe.recipe.label}  image={recipe.recipe.image} calories={recipe.recipe.calories} ingredients={recipe.recipe.ingredients}></Recipe> 
                      })

                    : <h1>Loading...</h1>
                  
                }
     </div>
    </div>
  );
}

export default App;
