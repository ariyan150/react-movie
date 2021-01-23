import { Button, TextField } from '@material-ui/core';
import './SignUp.css'
import axios from 'axios';

function SignUp() {
    return (
        <div className='wraper'>
            <div className="wraper__header">Sign Up</div>
            <form id='signup_form' noValidate autoComplete="off">
            <TextField id="standard-basic" name='username' label="User Name" />
                <TextField id="standard-basic" name='email' label="Email" />
                <TextField id="standard-basic" name='password' label="Password" />
                <TextField id="standard-basic" name='password' label="Verify Password" />
                <hr/>
                <Button type='submit' variant="contained" color="secondary">Submit</Button>
            </form> 
        </div>
    )
}

export default SignUp