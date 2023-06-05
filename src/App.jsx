import { useState } from 'react'
import './App.css'

function App() {
  const [income, setIncome] = useState(0)
  const [outcome, setOutcome] = useState(0)
  const [balance, setBalance] = useState(0)
  const [desc, setdesc] = useState("")
 const [array, setarray] = useState([])
 const [array1, setarray1] = useState([])
 const [color, setColor] = useState("")


  function incomeHandler(e){
    e.preventDefault()
    setIncome(e.target.income.value)
    setBalance(balance+Number(e.target.income.value))
    setdesc(e.target.desc.value)
    setarray(i=>[...i, `+€ ${e.target.income.value} ${e.target.desc.value}`])
  }
  function outcomeHandler(e){
    e.preventDefault()
    setOutcome(e.target.outcome.value)
    setBalance(balance-Number(e.target.outcome.value))
    setdesc(e.target.exdesc.value)
    setarray1(i=>[...i, `-€ ${e.target.outcome.value} ${e.target.exdesc.value}`])
  }

  return (
    <>
    <div className='forms'>
     <h1 className='title'>Budget App</h1>
    <p className='para'>BALANCE € {balance}</p>
     <form className='form1' onSubmit={incomeHandler}>
      {/* <label htmlFor="income">Income:</label> */}
      <input type='number' name="income" placeholder="enter the amount" />
      {/* <label htmlFor="desc">Description:</label> */}
      <input type="text" name="desc" id="" placeholder="description"/>
      <button type="submit" className='btn'>Income</button>
      </form>
      <form className='form2' onSubmit={outcomeHandler}>
      <input type='number' name="outcome" placeholder="enter the amount" />
      <input type="text" name="exdesc" id="" placeholder="description"/>
      <button className='btn1'>Expense</button>
      </form>
      </div>

      <div className='array' >
      <ul>
      {array.map(i=>
        <li className='green'>{i}</li>
      )}
      {array1.map(i=>
        <li className='red'>{i}</li>
      )}
      </ul>
      </div>
    </>
  )
}

export default App
