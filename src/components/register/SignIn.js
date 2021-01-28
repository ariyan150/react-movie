import { Button, TextField } from '@material-ui/core';
import './SignIn.css'
import axios from 'axios';

function SignIn() {
    const fetch = event => {
        event.preventDefault();
        axios.get('https://jsonplaceholder.typicode.com/todos',{
            
        })
        .then(res => (res.data))
        .then(data => {
            for(let item of data){
                console.log(`${item.id}
                ${item.title}`);
                if(item.id === 5){break;}
            }
        })
        .catch(err => console.log(err));
        
    }
    return (
        <div className='wraper'>
            <div className="wraper__header">Sign In</div>
            <form onSubmit={fetch} id='signin_form' noValidate autoComplete="off">
                <TextField id="standard-basic" name='email' type='emai' label="Email" />
                <TextField id="standard-basic" name='password' type='password' label="Password" />
                <hr/>
                <Button type='submit' variant="contained" color="secondary">Submit</Button>
            </form> 
        </div>
    )
}

export default SignIn
