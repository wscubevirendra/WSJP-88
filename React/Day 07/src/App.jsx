import React, { useState } from 'react';


function App() {
  const [list, setList] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      age: e.target.age.value
    };
    setList([...list, data])
    e.target.reset()
  }

  function deleteHandler(delIndex) {
    const newData = list.filter(
      (d, i) => {
        return i != delIndex ? true : false

      }
    )

    setList(newData)

  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Bootstrap Form UI</h2>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" className="form-control" placeholder="Enter Name" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" className="form-control" placeholder="Enter Email" />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input type="number" name="age" className="form-control" placeholder="Enter Age" />
        </div>
        <button type="submit" className="btn my-2 btn-primary">Submit</button>
      </form>

      {/* Table Section */}
      <h3 className="mt-5">User Data</h3>
      <table className="table table-bordered mt-3">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>

            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((data, index) => {
              return (
                <tr>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.age}</td>
                  <td>
                    <button onClick={() => deleteHandler(index)} className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
  );
}

export default App;
