import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'
const AddEmployeeCompoment = () => {

    const [full_name, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [salary, setSalary] = useState('')
    const {id} = useParams();
    const navigate = useNavigate();


    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = {full_name, email, address,salary}

        if(id){
            EmployeeService.updateEmployee(id, employee).then((response) => {
                navigate('/employees')
            }).catch(error => {
                console.log(error)
            })

        }else{
            EmployeeService.createEmployee(employee).then((response) =>{

                console.log(response.data)
    
                navigate('/employees');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        EmployeeService.getEmployeeById(id).then((response) =>{
            setFullName(response.data.full_name)
            setEmail(response.data.email)
            setAddress(response.data.address)
            setSalary(response.data.salary)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Employee</h2>
        }else{
            return <h2 className = "text-center">Add Employee</h2>
        }
    }

  return (
    <div>
    <br /><br />
    <div className = "container">
         <div className = "row">
             <div className = "card col-md-6 offset-md-3 offset-md-3">
                {
                title()
                }
                 <div className = "card-body">
                     <form>
                         <div className = "form-group mb-2">
                             <label className = "form-label"> Full Name :</label>
                             <input
                                 type = "text"
                                 placeholder = "Enter Full name"
                                 name = "full_Name"
                                 className = "form-control"
                                 value = {full_name}
                                 onChange = {(e) => setFullName(e.target.value)}
                             >
                             </input>
                         </div>

                         

                         <div className = "form-group mb-2">
                             <label className = "form-label"> Email :</label>
                             <input
                                 type = "email"
                                 placeholder = "Enter email "
                                 name = "email"
                                 className = "form-control"
                                 value = {email}
                                 onChange = {(e) => setEmail(e.target.value)}
                             >
                             </input>
                         </div>

                         <div className = "form-group mb-2">
                             <label className = "form-label"> Address :</label>
                             <input
                                 type = "text"
                                 placeholder = "Enter Address"
                                 name = "address"
                                 className = "form-control"
                                 value = {address}
                                 onChange = {(e) => setAddress(e.target.value)}
                             >
                             </input>
                         </div>

                         <div className = "form-group mb-2">
                             <label className = "form-label"> Salary :</label>
                             <input
                                 type = "text"
                                 placeholder = "Enter salary"
                                 name = "salary"
                                 className = "form-control"
                                 value = {salary}
                                 onChange = {(e) => setSalary(e.target.value)}
                             >
                             </input>
                         </div>

                         <button className = "btn btn-success" onClick = {(e) => saveOrUpdateEmployee(e)} >Submit </button>
                                <Link to="/employees" className="btn btn-danger"> Cancel </Link>

                     </form>

                 </div>
             </div>
         </div>

    </div>

 </div>
  )
}

export default AddEmployeeCompoment