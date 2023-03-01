import React, { useState } from 'react'
import './register.css'
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    console.log("data", data)
  return (
    <div className="main-screen-register h-screen w-screen flex flex-row justify-evenly grid grid-cols-2">
        <div className='left-screen-register'>
        </div>
        <div className='right-screen-register flex justify-center  items-center'>
            <Paper sx={{
                textAlign:'center',
                padding:'30px',
                borderRadius:'40px',
                width: '500px',
            }} elevation={6}>
                <div className="flex justify-between">
                    <h3 className='welcome-heading'>
                        Welcome to <span className='highlight'>MultiCare Clinic</span>,
                    </h3>
                    <div className='flex flex-col'>
                        <span className='have-account'>
                            Have an Account?
                        </span>
                        <Button sx={{
                            fontWeight: 400,
                            fontSize: '13px',
                            lineHeight: '20px',
                            color: '#779341',
                        }} variant="text">Sign In</Button>
                    </div>
                </div>
                <h1 className='main-heading pt-1 text-left'>
                    Register
                </h1>
                <div className='text-left pt-2'>
                    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                        <div className='flex flex-col flex-start pb-2'>
                            <h3 className='form-heading pb-2'>
                                Enter your username or email address
                            </h3>
                            <TextField label="Username" variant="outlined"
                            {...register("username")} />
                        </div>
                        <div className='flex flex-col flex-start pb-2'>
                            <h3 className='form-heading pb-2'>
                            Enter your Full name
                            </h3>
                            <TextField label="Name" variant="outlined" 
                            {...register("name")}/>
                        </div>
                        <div className='flex flex-col flex-start pb-2'>
                            <h3 className='form-heading pb-2'>
                            Enter your Contact number
                            </h3>
                            <TextField label=" Contact number" variant="outlined" 
                            {...register("contactNumber")}/>
                        </div>
                        <div className='flex flex-col flex-start pb-2'>
                            <h3 className='form-heading pb-2'>
                            Enter your Age
                            </h3>
                            <TextField label="Age" variant="outlined" {...register("age")} />
                        </div>
                        <Button type="submit" sx={{
                            width: '236px',
                            height: '54px',
                            background: '#779341',
                        }} variant="contained">Submit</Button>
                    </form>
                </div>
            </Paper>
        </div>
    </div>
  )
}

export default Register