import React,{useState, useEffect} from 'react'
import Budgetcontrol from './components/Budgetcontrol'
import Form from './components/Form'
import List from './components/List'
import Questions from './components/Questions'

const App = () => {

  const [budget, setBudget] = useState(0)
  const [remaining, setRemaining] = useState(0)
  const [question, setQuestion] = useState(true)
  const [costs, setCosts] = useState([])
  const [cost, setCost] = useState({})
  const [createCost, setCreateCost] = useState(false)

  

  useEffect(() => {

    //add new budget
    if(createCost){
      setCosts([
        ...costs,
        cost
      ])
    }

    //subtract from current budget
    const remainingbudget = remaining - cost.amount;
    setRemaining(remainingbudget)



    setCreateCost(false)
  }, [cost])
  

  return (
    <div className='container'>
      <header>
        <h1>Weekly expense</h1>
        <div className="contenido-principal contenido">
        {question ? 
        (
          <Questions
          budget={setBudget}
          remaining={setRemaining}
          question={setQuestion}
          />
        ):(
          <div className="row">
            <div className="one-half column">
              <Form
              setCost={setCost}
              setCreateCost={setCreateCost}
              />
            </div>
            <div className="one-half column">
              <List
              costs={costs}
              />
              <Budgetcontrol
              budget={budget}
              remaining={remaining}
              />
            </div>
          </div>
        )}
        </div>
      </header>
    </div>
  )
}

export default App
