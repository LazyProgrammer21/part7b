import uCount from "./useCounter";
const App = (props) => {
  const left = uCount();
  const right = uCount();

  return (
    <div>
      {left.value}
      <button onClick={left.increase}>left</button>
      <button onClick={right.decrease}>right</button>
      {right.value}
    </div>
  );
};
export default App;
