import { Button, TextField } from '@material-ui/core';
import './SignIn.css'
import axios from 'axios';

import {AddMovie} from '../../functions/AddMovie';

function SignIn() {
    const Login = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/auth/login', {
            "username": "Ariyan200",
            "password": "13801380",
        })
        .then(res => console.log(res.data.token))
        .catch(err => console.log(err));
    }
    return (
        <div className='wraper'>
            <div className="wraper__header">Sign In</div>
            <form onSubmit={Login} id='signin_form' noValidate autoComplete="off">
                <TextField id="standard-basic" name='email' type='emai' label="Email" />
                <TextField id="standard-basic" name='password' type='password' label="Password" />
                <hr/>
                <Button type='submit' variant="contained" color="secondary">Submit</Button>
            </form> 
        </div>
    )
}

export default SignIn
