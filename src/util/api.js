import axios from 'axios'

const Emp_api = "http://localhost:9091/api";

class EmpService {

    getEmp() {
        return axios.get(Emp_api+"/emp/listall");}

    delEmp(id){
        return axios.delete(Emp_api+"/emp/delete/"+id);}

    updateEmp(id){
        return axios.put(Emp_api+"/emp/update/"+ id);
    }
    oneEmp(id){
        return axios.get(Emp_api + "/emp/find/" + id);
    }
}

export default new EmpService();

