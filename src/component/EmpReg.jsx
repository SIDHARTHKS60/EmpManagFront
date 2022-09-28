import React,{useState} from 'react'
import Axios from 'axios';

function EmpReg () {
  
  const url = "http://localhost:9091/api/emp/add";
  const [data, setData] = useState({id:"",name:"",position:""})

  function submit(e)  {
    e.preventDefault();
    Axios.post(url,{id:data.id, name:data.name, position: data.position})
          .then(res=>{console.log(res.data)})
  }

  function handle(e) {
    const newdata ={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    console.log(newdata)
  }

  return (
    <div>
      <form
        onSubmit={(e) => submit(e)}
        style={{
          width: "800px",
          margin: "0 auto",
          font: "Arial",
          border: "25px",
        }}
      >
        <label>Employee ID : </label>
        <input
          type="text"
          id="id"
          value={data.id}
          onChange={(e) => handle(e)}
        />
        <br />
        <label>Employee Name : </label>
        <input
          type="text"
          id="name"
          value={data.name}
          onChange={(e) => handle(e)}
        />
        <br />
        <label>Position : </label>
        <input
          type="text"
          id="position"
          value={data.position}
          onChange={(e) => handle(e)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );

}

export default EmpReg;