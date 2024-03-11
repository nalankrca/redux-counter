//import { Component } from 'react';
import {  useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter-slice';


const Counter = () => {
  const dispatch = useDispatch()
 const counter = useSelector(state => state.counter.counter);
 const show = useSelector(state => state.counter.showCounter);
 
 const incrementHandler = () => {
  dispatch(counterActions.increment())
 }

 const increaseHandler = () => {
  dispatch(counterActions.increase(5))
 }
 const decrementHandler = () => {
  dispatch(counterActions.decrement())
 }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())   //store 'a dispatch ile toogle type state gönderilir
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}> {counter} </div>} {/* eğer show değişlebi ture ise div gösterilir değil ise div kapanır */}
      <div>
        <button onClick={incrementHandler} >Increment</button>
        <button onClick={increaseHandler} >Increment by 5</button>
        <button onClick={decrementHandler} >Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;


// CLASS COMPONENT EXAMPLE

// class Counter extends Component{

//   incrementHandler () {
//     this.props.increment()
//   }
//   decrementHandler () {
//     this.props.decrement();
//   }
//   toggleCounterHandler () {}
//   render(){
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}> {this.props.counter} </div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)} >Increment</button>
//           <button onClick={this.decrementHandler.bind(this)} >Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// const mapstateToProps = state => { //first argument we pass to connect
//   return{
//     counter:state.counter
//   }
// }

// const mapDispatchToProps = dispatch => { //when executed dispatch an action to the Redux store.
//   return{
//     increment: () => dispatch({type:'increment'}),
//     decrement: () => dispatch({type: 'decrement'})
//   }
// }

// export default connect(mapstateToProps,mapDispatchToProps)(Counter);
