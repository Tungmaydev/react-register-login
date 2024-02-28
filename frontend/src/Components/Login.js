import React, {useState} from 'react'
import Validation from './LoginValidation'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

export default function Login() {
    const [values, setValues] = useState({
        email:"",
        password:""
    })
    
    const handleInput = (event) =>{
        setValues(prev=> ({...prev, [event.target.name]: [event.target.value]}))
      }

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));

        if(errors.email === "" && errors.password === ""){
            
            axios.post('http://localhost:8081/login' ,values)
            .then(res =>{

                if(res.data === "Success"){
                    navigate('/home');
                }else{
                    alert("ไม่มีข้อมูล");
                }
            })
            .catch(err => console.log(err));

        }
    
       
    }
    
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='card w-25'>
                <h2 className='text-center'>Login</h2>
                <div className='card-body'>
                   <form onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="email">Email :</label>
                        <input type="email" onChange={handleInput} name='email' className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />                       
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password :</label>
                        <input type="password" onChange={handleInput} name='password'  className="form-control" id="password" placeholder="Password" />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                        
                    </div>                    
                    <button type="submit" className="btn btn-success w-100 mt-2">Login</button>
                    <Link to="/register" type="submit" className="btn btn-info w-100 mt-2">Register</Link>
                    </form>


                </div>
            </div>

        </div>

  )
}
