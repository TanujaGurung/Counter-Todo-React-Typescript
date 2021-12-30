import "./App.css";
import TodosProvider from "./context/TodoContext";
import ToDo from "./components/ToDo";
import CounterProvider from "./context/CounterContext";
import Counter from "./components/Counter";

// import CounterContextProvider from "./context/CounterContext";
// import Counter from "./components/Counter";
// export default () => (
//   <TodosProvider>
//     <Todos />
//   </TodosProvider>
// );
function App() {
  return (
    <CounterProvider>
      <div className="App">
        <Counter />
      </div>
    </CounterProvider>
  );
}

export default App;
