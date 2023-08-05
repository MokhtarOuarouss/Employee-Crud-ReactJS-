import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom'

const ListEmloyeeComponent = () => {
    const [employee, setEmployee] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployee(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    
    },[])

    const deleteEmployee = (employeeId) => {
        EmployeeService.deleteEmployee(employeeId).then((response) =>{
            navigate("/");
            window.location.reload();
 
        }).catch(error =>{
            console.log(error);
        })
         
     }

    return ( <div className = "container">
            <h2 className = "text-center"> List Employees </h2>
            <Link to="/add-Employee" className='btn btn-primary mb-2'>Add Employee</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>  Id </th>
                    <th>  Full Name </th>
                    <th>  Email  </th>
                    <th>  Address </th>
                    <th>  Salary </th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        employee.map(
                            employee =>
                            <tr key = {employee.id}> 
                                <td> {employee.id} </td>
                                <td> {employee.full_name} </td>
                                <td>{employee.email}</td>
                                <td>{employee.address}</td>
                                <td>{employee.salary}</td>
                                <td>
                                <Link className="btn btn-info" to={'/edit-employee/${employee.id}'} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteEmployee(employee.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmloyeeComponent