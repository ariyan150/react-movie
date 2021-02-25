import { Button, TextField } from '@material-ui/core';
import './SignUp.css'
import axios from 'axios';

function SignUp() {
    const Register = (e) => {
        e.preventDefault();
        axios.get('http://127.0.0.1:8000/api/lists/', {
            headers: {"Authorization": "Token 65271d3c8c48c96f48aabdc51fe3a7f75893fb2475f5e321610ddc7d6d220769"}
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }
    return (
        <div className='wraper'>
            <div className="wraper__header">Sign Up</div>
            <form onSubmit={Register} id='signup_form' noValidate autoComplete="off">
                <TextField id="standard-basic" name='username' label="User Name" />
                <TextField id="standard-basic" type='emai' name='email' label="Email" />
                <TextField id="standard-basic" name='password' type='password' label="Password" />
                <TextField id="standard-basic" name='password' type='password' label="Verify Password" />
                <hr/>
                <Button type='submit' variant="contained" color="secondary">Submit</Button>
            </form> 
        </div>
    )
}

export default SignUp