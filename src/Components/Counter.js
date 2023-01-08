import { useSelector,useDispatch } from "react-redux";
import {increase_count,decrease_count} from '../Redux/Counter/CounterSlice'


function Counter() {

  const count = useSelector(state => state.count.value)   // taking initial value of count here from store

  const dispatch = useDispatch()

  const inCrement  = ()=>{
       dispatch(increase_count())
  }

  const deCrement  = ()=>{
    dispatch(decrease_count())
}

  return (
    <div className="counter">
      <h2>Counter</h2>
      <h3>The count is - {count}</h3>
      <button onClick={inCrement}>Increase</button>
      <button onClick={deCrement}>Decrease</button>
    </div>
  );
}

export default Counter;
