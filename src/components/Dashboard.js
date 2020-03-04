import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import NavBar from './NavBar';
import Card from './Card'
import Data from './DummyData'


export default function Dashboard(){

  const [dumData, setDumData] = useState([])
  const [query, setQuery] = useState('')

  useEffect(()=> {
    const cookBook = Data.filter(rec => rec.name.toLowerCase().includes(query.toLowerCase()))
    setDumData(cookBook)
  }, [query])

const handleInputChange = e => {
  setQuery(e.target.value)
}


  return (
    <div>
    <NavBar handleInputChange={handleInputChange} query={query}/>
    <div>
      <h1>Secret Family Recipies</h1>
      <Button href="/rform/">Add Recipie</Button>
      {dumData.map(function(rec, index){
        return <Card rec={rec} key={index}/>
      })}
    </div>
    </div>
  );
}

    






