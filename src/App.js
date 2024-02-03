import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./snack-or-booze/Home";
import SnackOrBoozeApi from "./snack-or-booze/Api";
import NavBar from "./snack-or-booze/NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./snack-or-booze/Menu";
import MenuItem from "./snack-or-booze/MenuItem";
import AddItemForm from "./snack-or-booze/AddItemForm";

function App() {
  // Hooks for loading status, snacks and drinks
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch snacks and drinks data from the API
        const snacksData = await SnackOrBoozeApi.getSnacks();
        const drinksData = await SnackOrBoozeApi.getDrinks();
        setSnacks(snacksData); //updates the snacks state
        setDrinks(drinksData); //updates the drinks state
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  // Function to add a new item (snack or drink)
  const addItem = async (item, type) => {
    try {
      // Call API to add the item and fetch updated list to reflect the new item
      await SnackOrBoozeApi.addItem(type, item);
      if (type === "snacks") {
        const updatedSnacks = await SnackOrBoozeApi.getSnacks();
        setSnacks(updatedSnacks);
      } else if (type === "drinks") {
        const updatedDrinks = await SnackOrBoozeApi.getDrinks();
        setDrinks(updatedDrinks);
      }
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  };

  // Render loading state or app UI
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          //Route configuration
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} />
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} title="Drinks" />
            </Route>
            <Route path="/snacks/:id">
              <MenuItem items={snacks} cantFind="/snacks" />
            </Route>
            <Route path="/drinks/:id">
              <MenuItem items={drinks} cantFind="/drinks" />
            </Route>
            <Route path="/add-item">
              <AddItemForm addItem={addItem} />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
