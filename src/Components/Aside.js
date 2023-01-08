import { useSelector } from "react-redux";  // hooks for acessing react redux store
import { useDispatch } from "react-redux";
import randomColor from "randomcolor";
import { change_Color } from "../Redux/Color/ColorSlice";  // action

function Aside() {

  const color = useSelector(state=>state.color.value)
  const dispatch = useDispatch()

  const changeColor = ()=>{
      dispatch(change_Color({
        color:randomColor()  
      }))    // action dispatch il ittu
  }

  return (
    <div className="aside">
      <h2 style={{color}}> Aside</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default Aside;
