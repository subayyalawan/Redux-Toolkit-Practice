import React from "react";
import ToDoForm from "./components/ToDoForm";
import ToDos from "./components/ToDos";
import { Provider } from "react-redux";
import { Store } from "./app/Store";

const App = () => {
  return (
    <Provider store={Store}>
      <div className="bg-red-700/45 text-white">Redux ToolKit Practice</div>
      <ToDoForm />
      <ToDos />
    </Provider>
  );
};

export default App;
