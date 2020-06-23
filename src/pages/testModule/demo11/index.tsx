import React, { useState, useReducer } from "react";
// const [state, dispatch] = useReducer(reducer, initialArg, init);
// useState 的替代方案。它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法。（如果你熟悉 Redux 的话，就已经知道它如何工作了。）
// slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]
// console.log(animals.slice(0, 4));
// Array ["ant", "bison", "camel", "duck"]
function reducer(state, action) {
    console.log('111', state)
    console.log('222', action)
  switch (action.type) {
    case "add":
      return [...state, action.item];
    case "remove":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      throw new Error();
  }
}

function FavoriteMovies() {
  const [movies, dispatch] = useReducer(reducer, [{ name: "Heat" }]);
  const [newMovie, setNewMovie] = useState("");

  const handleAddClick = () => {
    if (newMovie === "") {
      return;
    }
    dispatch({ type: "add", item: { name: newMovie } });
    setNewMovie("");
  };

  return (
    <>
      <div style={{marginTop: 10}}>
        {movies.map((movie, index) => {
          return (
            <Movie
              movie={movie}
              onRemove={() => dispatch({ type: "remove", index })}
            />
          );
        })}
      </div>
      <div style={{marginTop: 20}}>
        <input
          type="text"
          value={newMovie}
          onChange={event => setNewMovie(event.target.value)}
        />
        <button onClick={handleAddClick}>Add movie</button>
      </div>
    </>
  );
}

function Movie({ movie, onRemove }) {
  return (
    <div style={{marginTop: 5}}>
      <span>{movie.name}</span>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

function App() {
  return (
    <div style={{maxWidth: 500}}>
      <h2>My favorite movies</h2>
      <FavoriteMovies />
    </div>
  );
}
export default App;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
