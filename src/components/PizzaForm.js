import React, { useState, useEffect } from "react";

function PizzaForm({ pizza, handleFormSubmit }) {
  const [formState, setFormState] = useState({
    id: null,
    topping: "",
    size: "Small",
    vegetarian: false,
  });

  useEffect(() => {
    if (pizza) {
      setFormState(pizza);
    }
  }, [pizza]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleFormSubmit(formState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={formState.topping}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <select
            className="form-control"
            name="size"
            value={formState.size}
            onChange={handleChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value={true}
              checked={formState.vegetarian === true}
              onChange={handleChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value={false}
              checked={formState.vegetarian === false}
              onChange={handleChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
