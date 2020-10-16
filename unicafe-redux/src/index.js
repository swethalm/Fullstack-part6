import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}
const Statistic = (props)=>{
  console.log(props)
  return(
  <>
 
    <tr>
    <td>{props.text}</td><td> {props.value}</td>
    </tr>
  </>
  )
}
const Statistics = ({goodc,badc,neutralc})=>{
  if (goodc+badc+neutralc===0)
  {
    return (
      <div>No feedback given</div>
    )
  }
  return(
   <> 
   <table>
    <tbody>
      <Statistic text='Good' value={goodc}/> 
      <Statistic text='Neutral' value={neutralc}/> 
      <Statistic text='Bad' value={badc}/>    
       <Statistic text='All' value={goodc+badc+neutralc}/>  
      <Statistic text='Average' value={((goodc*1)+(badc*-1))/(goodc+badc+neutralc)}/> 
      <Statistic text='Positive' value={goodc/(goodc+badc+neutralc)*100+"%"}/>   
      </tbody>
    </table>
   </> 
  )
}

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }
  const ok = () => {
    store.dispatch({
      type: 'OK'
    })
  } 
  const zero = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={good} text='Good'/>
      <Button handleClick={ok} text='Neutral'/>     
      <Button handleClick={bad} text='Bad'/> 
      <h2>Statistics</h2>
      <Statistics goodc={store.getState().good} neutralc={store.getState().ok} badc={store.getState().bad}/>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
