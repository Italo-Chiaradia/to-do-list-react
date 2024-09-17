import styles from "./Task.module.css";
import {Trash, Check} from "phosphor-react";

import {useState} from "react";

interface taskProps {
  description: string,
  onFinishedTask: () => void,
  onUnfinishedTask: () => void,
  onDelete: (description: string) => void,
}

export function Task({description, onFinishedTask, onUnfinishedTask, onDelete}: taskProps) {
  const [isChecked, setIsChecked] = useState(false);
  function handleCheckboxChange() {
    if (isChecked) {
      onUnfinishedTask();
    } else {
      onFinishedTask();
    }
    setIsChecked(!isChecked);
  }
  return (
    <div className={styles.task}>
      <label>
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={handleCheckboxChange}
        />
        <span>
          <Check/>
        </span>
      </label>
      <p className={isChecked ? styles.taskIsDone : ""}>
        {description}
      </p>
      <button onClick={() => onDelete(description)}>
        <Trash/>
      </button>
    </div>
  )
}