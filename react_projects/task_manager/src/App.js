import React, { useState } from 'react'

function App() {
  // hook to hold all tasks
  const [todos, setTodos] = useState([]);

  // hook to get all data from input 
  const [newtodo, setnewtodo] = useState();

  function Addtodo() {
    let newtodos = [...todos, { todo: newtodo.trim() }] // the dots for holding all values, passing data from newtodo to todo
    setTodos(newtodos); //passing data to setTodos
    setnewtodo("");
    // console.log(newtodos)
  }

  function Deletetodo(index){
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  }

  return (
    <div>
      {/* task management app */}
      <center>
        <h1>Enter task</h1>
        <input type='text' value={newtodo} onChange={(e) => setnewtodo(e.target.value)} />
        <button onClick={Addtodo}>Save task</button>
      </center>
      <br />
      <hr />
      <table>
        <thead>
          <tr>
            <th>All tasks</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {
            todos.map((tod, index) => (
              <tr key={index}>
                <td>{tod.todo}</td>
                <td>
                  <button onClick={() => Deletetodo(index)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default App