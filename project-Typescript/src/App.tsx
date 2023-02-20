import {useState, useEffect, useRef} from 'react'
import Form from './components/Form'
import List from './components/List'
import {Sub} from './types'





interface AppState {
  subs: Sub[]
  newSubsNumbre: number
}


const INITIAL_STATE = [
  {
    nick: 'dapalu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu hace de moderador'
  },
  {
    nick: 'sergio_serrano',
    subMonths: 7,
    avatar: 'https://i.pravatar.cc/150?u=sergio_serrano',
    
  }

]


function App() {

  const [subs, setSubs] = useState<AppState['subs']>([])
  const divRef = useRef<HTMLDivElement>(null)



  useEffect(() => {
    setSubs(INITIAL_STATE)
    
  }, [])


  const HandleNewSub = (newSub: Sub): void =>{
    setSubs(subs => [...subs, newSub])

  }
  



  

  return (
    <div className="App" ref={divRef}>
      <h1>Midu Subs</h1>
      <List subs={subs}/>
      <Form onNewSub={HandleNewSub}/>
    </div>
  )
}

export default App
