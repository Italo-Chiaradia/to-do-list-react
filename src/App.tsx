import "./global.css";
import styles from "./App.module.css";
import { Task } from "./components/Task";
import { Header } from "./components/Header";
import { PlusCircle, ClipboardText } from "phosphor-react";

import { useState } from "react";

export function App() {
  const [completedTasks, setCompletedTasks] = useState(0);
  const [tasks, setTasks] = useState(["arrumar cama"]);
  const [newTask, setNewTask] = useState("");

  function handleAddNewTask() {
    event?.preventDefault();

    setTasks([...tasks, newTask]);
    setNewTask("");
  } 
  function handleRemoveTask(deleted: string) {
    handleRemoveCompletedTask()
    setTasks(state => state.filter(task => task != deleted));
  }
  function handleAddCompletedTask() {
    setCompletedTasks((state) => {
      return state+1
    });
  }
  function handleRemoveCompletedTask() {
    if (completedTasks > 0) {
      setCompletedTasks((state) => {
        return state-1
      });
    }
  }
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <form>
          <input 
            type="text" 
            placeholder="Adicione uma nova tarefa" 
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleAddNewTask}>
            Criar
            <PlusCircle/>
          </button>
        </form>

        <div className={styles.tasksWrapper}>
          <header>
            <div>
              <span className={styles.blueColorText}>Tarefas criadas</span>{" "}
              <span className={styles.counter}>{tasks.length}</span>
            </div>
            <div>
              <span className={styles.purpleColorText}>Concluídas</span>{" "}
              <span className={styles.counter}>
                {
                  tasks.length == 0 ? (<span>0</span>) : (
                    <span>
                      <span>{completedTasks}</span> de <span>{tasks.length}</span>
                    </span>
                  )
                }
              </span>
            </div>
          </header>
          <div className={styles.tasksContent}>
            {
              tasks.length > 0 ? (
                tasks.map(description => {
                  return (
                    <Task 
                      key={description} 
                      description={description}
                      onFinishedTask={handleAddCompletedTask}
                      onUnfinishedTask={handleRemoveCompletedTask}
                      onDelete={handleRemoveTask}
                    />
                  )
                })
              ) : (
                <div className={styles.noTasksContainer}>
                  <ClipboardText/>
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                  <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
              )
            }
          </div> 
        </div>
      </div>
    </>
  )
}