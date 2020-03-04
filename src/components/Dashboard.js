import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import NavBar from './NavBar';
import Card from './Card'
import Data from './DummyData'
import AxiosWithAuth from "../utils/AxiosWithAuth";

import { connect } from "react-redux";
import { fetchRecipes} from '../actions/FetchRecipes';


const  Dashboard=() =>{

  // const [dumData, setDumData] = useState([])


  // useEffect(()=> {
  //   const cookBook = Data.filter(rec => rec.name.toLowerCase().includes(query.toLowerCase()))
  //   setDumData(cookBook)
  // }, [query])

  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  useEffect(()=> {
    const userId  = localStorage.getItem("user_id")
  const idNum = parseInt(userId);  
  console.log(idNum);
    AxiosWithAuth()
    .get(`api/recipes/user/${idNum}`)
    .then( res => {
      console.log('this is the recipes', res.data)
      setRecipes(res.data);
      const recipeResults = res.data.filter(
        e =>
        e.name.toLowerCase().includes(query.toLowerCase())

      )
      setRecipes(recipeResults)
    })
    .catch(err => {
      console.log('this is the show recipes error', err);
    })
  }, [query])

const handleInputChange = e => {
  setQuery(e.target.value)
}


  return (
    <div>
    <NavBar handleInputChange={handleInputChange} query={query}/>
    <div>
      <h1>Secret Family Recipes</h1>
      {/* <Button href="/rform/">Add Recipie</Button>
      {dumData.map(function(rec, index){
        return <Card rec={rec} key={index}/>
      })} */}
      <Button href="/rform/">Add Recipe</Button>
      {recipes.map(e =>(
        <Card e={e} key={e.id}/>
      )
        )}
    </div>
    </div>
  );
}
const mapStateToProps = state => {
  return state;
};

export default connect (mapStateToProps, {fetchRecipes})(Dashboard)

    






