import React,{useState} from 'react'
import Form from './components/Form'
import Questions from './components/Questions'

const App = () => {

  const [budget, setBudget] = useState(0)
  const [remaining, setRemaining] = useState(0)

  return (
    <div className='container'>
      <header>
        <h1>Weekly expense</h1>
        <div className="contenido-principal contenido">
          <Questions
          budget={setBudget}
          remaining={setRemaining}
          />
          <div className="row">
            <div className="one-half column">
              <Form/>
            </div>
            <div className="one-half column">
              1
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
