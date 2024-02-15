import React from "react";
import AddTodo from "./components/addTodo/AddTodo";
import ListTodo from "./components/listTodo/ListTodo";
import { Provider } from "react-redux";
import { store } from "./app/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="flex justify-center items-center m-12">
        <div>
          <span className="flex justify-center items-center">
            <h1 className="font-semibold">Manage Your Todos</h1>
          </span>
          <div>
            <AddTodo />
            <ListTodo />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
