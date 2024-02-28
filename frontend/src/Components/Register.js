import React, {useState}  from 'react'
import Validation from './RegisterValidation'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Register() {
    const [values, setValues] = useState({
        name:"",
        email:"",
        password:""
    })

  const handleInput = (event) =>{
    setValues(prev=> ({...prev, [event.target.name]: [event.target.value]}))
  }

  
  const [errors, setErrors] = useState({});
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    if(errors.name ==="" && errors.email === "" && errors.password ===""){
        axios.post('http://localhost:8081/register', values)
        .then(res=> console.log(res))
        .catch(err => console.log(err));


    }
  }



  return (
    <>
    
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='card w-25'>
                <h2 className='text-center'>Register</h2>
                <div className='card-body'>
                   <form onSubmit={handleSubmit} >
                   <div className="form-group">
                        <label htmlFor="name">Name :</label>
                        <input type="text" onChange={handleInput} name='name'  className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name" />                       
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>

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
                    <button type="submit" className="btn btn-info w-100 mt-2">Register</button>
                    <Link to="/" type="button" className="btn btn-success w-100 mt-2">Login</Link>
                    </form>


                </div>
            </div>

        </div>

    </>

  )
}
