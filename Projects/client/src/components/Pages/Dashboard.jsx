import React, {useState} from 'react'
import Card from '../layout/Card'
import Nav from '../layout/Nav'
import styles from '../../CSS/dashboard.module.css'
import Sidebar from '../layout/Sidebar'


const Dashboard = () => {

  const [bar, setBar] = useState(false)


  return (
    <>
      <Nav 
      setBar={setBar}/>
      <Sidebar
      setBar={setBar}
      bar={bar}

      />
      <div className={styles.container}>
        <Card/>
        <Card/>
        <Card/>
      </div>

    </>
   
  )
}

export default Dashboard