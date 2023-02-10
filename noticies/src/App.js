import React from 'react'
import Form from './Components/Form'
import Header from './Components/Header'


const App = () => {
  return (
    <>
    <Header
      title='Search Noticies'
    />

    <div className="container white">
      <Form/>

    </div>
    </>
  )
}

export default App
