import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [allPies, setAllPies] = useState([])
  const [pizzaToEdit, setPizzaToEdit] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then(r => r.json())
    .then(data => setAllPies(data))
  }, []);

  function handleEditClick(pizza){
    setPizzaToEdit(pizza)
    console.log(pizzaToEdit)
  }

  return (
    <>
      <Header />
      <PizzaForm />
      <PizzaList pizzas={allPies} handleClick={handleEditClick}/>
    </>
  );
}

export default App;
