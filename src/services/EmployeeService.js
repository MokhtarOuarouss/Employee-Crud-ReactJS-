import axios from 'axios'

const AllEmployee_REST_API_URL = 'http://localhost:8082/employee/';

class EmployeeService{


    getAllEmployees(){
        return axios.get(AllEmployee_REST_API_URL+ 'getAll')
    }

    createEmployee(employee){
        return axios.post(AllEmployee_REST_API_URL + 'add', employee)
    }

    getEmployeeById(employeeId){
        return axios.get(AllEmployee_REST_API_URL + 'getEmp/' + employeeId);
    }

    updateEmployee(employeeId, employee){
        return axios.put(AllEmployee_REST_API_URL + 'updateEmp/' +employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(AllEmployee_REST_API_URL + 'delete-Emp/' + employeeId);
    }
}

export default new EmployeeService();