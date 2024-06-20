import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [allPies, setAllPies] = useState([]);
  const [pizzaToEdit, setPizzaToEdit] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((r) => r.json())
      .then((data) => setAllPies(data));
  }, []);

  function handleEditClick(pizza) {
    setPizzaToEdit(pizza);
  }

  function handleFormSubmit(updatedPizza) {
    const updatedPies = allPies.map((pizza) =>
      pizza.id === updatedPizza.id ? updatedPizza : pizza
    );
    setAllPies(updatedPies);

    fetch(`http://localhost:3001/pizzas/${updatedPizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPizza),
    }).then((r) => r.json())
      .then((data) => {
        setPizzaToEdit(null);
        console.log("Pizza updated successfully:", data);
      });
  }

  return (
    <>
      <Header />
      <PizzaForm pizza={pizzaToEdit} handleFormSubmit={handleFormSubmit} />
      <PizzaList pizzas={allPies} handleClick={handleEditClick} />
    </>
  );
}

export default App;
