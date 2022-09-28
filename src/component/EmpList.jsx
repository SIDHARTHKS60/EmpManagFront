import React, { useState } from "react";
import EmpService from "../util/api";

class EmpList extends React.Component {
  constructor(props) {
    super(props)

    this.state = { employees: [] }
    this.delEmp = this.delEmp.bind(this);
    this.selectEmp = this.selectEmp.bind(this);
  }

  componentDidMount() {
    EmpService.getEmp().then((response) => {
      this.setState({ employees: response.data });
      //this.setId(response[0].id);
      });
      const [id, setId] = useState("");
      const [name, setName] = useState("");
      const [position, setPosition] = useState("");
  }

  delEmp(id) {
    EmpService.delEmp(id).then((response) => {
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== id
        ),
      });
    });
  }

  selectEmp(id) {
    console.log("Function called", this.state.employees[3]);
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Employee List</h1>
        <table border="2" width="450px">
          <thead>
            <tr>
              <td>Emp ID</td>
              <td>Emp Name</td>
              <td>Emp Position</td>
              <td>Actions</td>
            </tr>
          </thead>

          <tbody> {
            this.state.employees.map(
                employee => 
               <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>
                  <button style={{ marginLeft: "10px" }} onClick={() => this.delEmp(employee.id)}>
                    Delete
                  </button>
                  <button style={{ marginLeft: "10px" }} onClick={() => this.selectEmp(employee.id)}>
                    Update
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <br /> <br />
        <div>
          <h3>Update</h3>
          <label> ID : </label>
          <input
            type="text"
            //value={id}
            //onChange={(e) => this.setId(e.target.value)}
          />
          <br />
          <br />
          <label> Emp Name : </label>
          <input
            type="text"
            // value={this.name}
            // onChange={(e) => this.setName(e.target.value)}
          />
          <br />
          <br />
          <label> Position : </label>
          <input
            type="text"
            // value={this.position}
            // onChange={(e) => this.setPosition(e.target.value)}
          />
          <br />
          <br />
          <button //onClick={()=>{updateEmp}}
          >
            Update
          </button>
        </div>
      </div>
    );
  }
}

export default EmpList;
