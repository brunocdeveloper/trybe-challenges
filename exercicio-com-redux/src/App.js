import { useSelector, useDispatch } from 'react-redux';

function App() {
  const totalValue = useSelector(state => state.myReducer.data);
  const dispatch = useDispatch();

  function addValue() {
    dispatch({type: 'INCREMENT', value: 1});
  }

  return (
    <div>
      Hello, world!
      calcular {totalValue}
      <button onClick={addValue}>Somar + 1 </button>
    </div>
  );
}

export default App;
