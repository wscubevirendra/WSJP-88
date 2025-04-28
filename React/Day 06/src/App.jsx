import React, { useState, useRef } from 'react';

export default function App() {
  const [item, setItem] = useState([]);
  const inpRef = useRef();

  function itemAddHandler() {
    setItem([...item, inpRef.current.value])
    inpRef.current.value = ""
  }

  function deleteHandler(index) {
    const newData = item.filter((d, i) => {
      return i != index ? true : false
    })
    setItem(newData)

  }

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="card-title mb-4">To-Do List</h4>

          {/* Input Group */}
          <div className="input-group mb-3">
            <input
              type="text"
              ref={inpRef}
              className="form-control"
              placeholder="Enter a task"
              aria-label="Enter a task"
              aria-describedby="button-add"
            />
            <button
              onClick={itemAddHandler}
              className="btn btn-primary" type="button" id="button-add">
              Add
            </button>
          </div>
          <Listing item={item} deleteHandler={deleteHandler} />
        </div>
      </div>
    </div>
  );
}



function Listing({ item, deleteHandler }) {
  return (
    <ul className="list-group">
      {
        item.map((data, index) => {
          return (

            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {display}
              <span onClick={() => deleteHandler(index)} className="badge bg-primary rounded-pill">Delete</span>
            </li>

          )
        })
      }
    </ul>
  )
}

//Listing -----------------App       (Child to Parent)
//App ......................Listing  (Parent to child)