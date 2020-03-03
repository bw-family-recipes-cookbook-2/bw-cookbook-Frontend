import React from "react";
import Button from '@material-ui/core/Button';
import NavBar from './NavBar';
import Card from './Card'

const data = [
  {
    "id": 1,
    "name": "salsa",
    "source": "Aunt Beth",
    "category": "apetizer",
    "ingredients": "apples",
    "instructions": "Blend all ingredients together",
    "user_id": 1
  },
  {
    "id": 2,
    "name": "Teriyaki Chicken",
    "source": "Aunt Beth",
    "category": "Main dish",
    "ingredients": "apples",
    "instructions": "Put teriyaki sauce over chicken, bake for an hour",
    "user_id": 1
  },
  {
    "id": 3,
    "name": "Fruit salad",
    "source": "Grandma JR",
    "category": "dessert",
    "ingredients": "apples",
    "instructions": "Mix all ingredients, add dressing",
    "user_id": 2
  },
  {
    "id": 4,
    "name": "Hummus",
    "source": "Aunt Beth",
    "category": "Apetizer",
    "ingredients": "apples",
    "instructions": "Blend all ingredients together",
    "user_id": 2
  },
  {
    "id": 5,
    "name": "Teriyaki chicken",
    "source": "Aunt Beth",
    "category": null,
    "ingredients": "apples",
    "instructions": "Put teriyaki sauce over chicken, bake for an hour",
    "user_id": 6
  },
  {
    "id": 6,
    "name": "Teriyaki chicken 2",
    "source": "Aunt Beth",
    "category": null,
    "ingredients": "apples",
    "instructions": "Put teriyaki sauce over chicken, bake for an hour",
    "user_id": 6
  },
  {
    "id": 7,
    "name": "Teriyaki chicken 3",
    "source": "Aunt Beth",
    "category": "dinner",
    "ingredients": "apples",
    "instructions": "Put teriyaki sauce over chicken, bake for an hour",
    "user_id": 6
  },
  {
    "id": 8,
    "name": "Teriyaki chicken 3",
    "source": "Aunt Beth",
    "category": "dinner",
    "ingredients": "apples",
    "instructions": "Put teriyaki sauce over chicken, bake for an hour",
    "user_id": 6
  },
  {
    "id": 9,
    "name": "Teriyaki beef",
    "source": "Aunt Beth",
    "category": "dinner",
    "ingredients": "apples",
    "instructions": "Put teriyaki sauce over chicken, bake for an hour",
    "user_id": 6
  },
  {
    "id": 10,
    "name": "Teriyaki beef",
    "source": "Aunt Beth",
    "category": "dinner",
    "ingredients": "apples",
    "instructions": "Put teriyaki sauce over chicken, bake for an hour",
    "user_id": 6
  },
  {
    "id": 11,
    "name": "Teriyaki beef",
    "source": "Aunt Beth",
    "category": "dinner",
    "ingredients": "apples",
    "instructions": "Put teriyaki sauce over chicken, bake for an hour",
    "user_id": 6
  }
]

export default function Dashboard(){


  return (
    <div>
    <NavBar />
    <div>
      <h1>Secret Family Recipies</h1>
      <Button href="/rform/">Add Recipie</Button>
      {data.map(function(rec, index){
        return <Card rec={rec} key={index}/>
      })}
    </div>
    </div>
  );
}

    






