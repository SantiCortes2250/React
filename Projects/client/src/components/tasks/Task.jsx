import React from "react";
import styles from '../../CSS/task.module.css'

const Task = ({task}) => {

    const {name, status} = task
  return (
    <div className={styles.task}>
      <label className={styles.checkBox}>
        <input type="checkbox" />
        <div className={styles.transition}></div>
      </label>
      <p>{name}</p>
    </div>
  );
};

export default Task;
