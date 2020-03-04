import React from "react";
import Button from '@material-ui/core/Button';
import NavBar from './NavBar';
import Card from './Card'
import Data from './DummyData'


export default function Dashboard(){


  return (
    <div>
    <NavBar />
    <div>
      <h1>Secret Family Recipies</h1>
      {/* <Button href="/rform/">Add Recipie</Button>
      {Data.map(function(rec, index){
        return <Card rec={rec} key={index}/>
      })} */}
      
    </div>
    </div>
  );
}

    






