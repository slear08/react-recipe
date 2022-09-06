import React from 'react';
import Recipe from './components/Recipe';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App ">
        <div className="h-[50%]">
          <div className="mt-[3rem]">
            <h1 className="text-white font-bold text-[3rem] ">WELCOME TO MY RECIPE</h1>
            <p className="text-[1.5rem]">WE ARE HAPPY TO SERVE YOU</p>
          
            <form className="search-form m-[3rem] ">
              <input type="text" className="search-bar min-w-[300px] p-3 rounded-xl border-[.2rem] mr-1" placeholder="Search for your recipes for..."/>
              <button className="p-3 rounded-xl border-[.2rem] border-green-500 text-white mr-1 bg-green-400 hover:bg-green-600 " type="submit">SEARCH</button>
            </form>
          </div>
        </div>
        <div className="flex flex-wrap max-w-[1500px] mx-auto">
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
        </div>
        <Footer />
    </div>
  );
}

export default App;
