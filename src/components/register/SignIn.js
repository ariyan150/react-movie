import { Button, TextField } from '@material-ui/core';
import './SignIn.css'
import axios from 'axios';

function SignIn() {
    return (
        <div className='wraper'>
            <div className="wraper__header">Sign In</div>
            <form id='signin_form' noValidate autoComplete="off">
                <TextField id="standard-basic" name='email' label="Email" />
                <TextField id="standard-basic" name='password' label="Password" />
                <hr/>
                <Button type='submit' variant="contained" color="secondary">Submit</Button>
            </form> 
        </div>
    )
}

export default SignIn
