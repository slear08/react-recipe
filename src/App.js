import React, {useState, useEffect }from 'react';
import Recipe from './components/Recipe';
import Footer from './components/Footer';
import './App.css';

function App() {

  const APPLICATION_ID = "394cb4a7";
  const APPLICATION_KEY = "b066ba204b7377715d3db2ab3da7425f";

  const [recipes, setRecipe] = useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState("chicken");

  useEffect(() => { 
    const getRecipe = async() => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APPLICATION_ID}&app_key=${APPLICATION_KEY}`);
      const result = await response.json();
      setRecipe(result.hits);
    }
    getRecipe();
  },[query]);

  
  const getQuery = e =>{
    e.preventDefault();
    setQuery(search);
  }
 

  

  return (
    <div className="App ">
        <div className="h-[50%] flex flex-row justify-center items-center text-center">
          <div className="mt-[3rem]">
            <h1 className="text-white font-bold text-[3rem] text-center">WELCOME TO MY RECIPE</h1>
            <p className="text-[1.5rem]">WE ARE HAPPY TO SERVE YOU</p>
          
            <form onSubmit={getQuery} className="search-form m-[3rem] ">
              <input type="text" className="search-bar min-w-[300px] p-3 rounded-xl border-[.2rem] mr-1" placeholder="Search for your recipes for..." value={search} onChange={e=>{setSearch(e.target.value)}}/>
              <button className="p-3 rounded-xl border-[.2rem] border-green-500 text-white mr-1 bg-green-400 hover:bg-green-600 " type="submit">SEARCH</button>
            </form>
          </div>
        </div>
        <div className="flex flex-wrap max-w-[1500px] mx-auto mb-4">
          {recipes.map(recipe => 
            <Recipe 
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              calories={recipe.recipe.calories}
              ingredients={recipe.recipe.ingredients}
            />
            )}
        </div>
        <Footer />
    </div>
  );
}

export default App;
