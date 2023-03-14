import React from 'react'
import Card from '../layout/Card'
import Nav from '../layout/Nav'
import styles from '../../CSS/dashboard.module.css'
import Sidebar from '../layout/Sidebar'


const Dashboard = () => {
  return (
    <>
      <Nav/>
      <Sidebar/>
      <div className={styles.container}>
        <Card/>
        <Card/>
        <Card/>
      </div>

    </>
   
  )
}

export default Dashboard