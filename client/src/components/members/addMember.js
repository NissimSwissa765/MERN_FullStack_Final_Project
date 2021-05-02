import { Button, Paper, TextField } from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addMember } from "./membersUtils.js";

function AddMember(props)
{
    const [member, setMember] = useState({name: '', email: '', city: ''})

    const add = async () =>
    {
        await addMember(member)
        props.history.push('/members/all')
    }

    return(
        <Paper className={'Paper'}>
            <h3>Add A Member</h3>
            <TextField label='Name' required onChange={m=>setMember({...member, name: m.target.value})}/><br/>
            <TextField label='Email' required onChange={m=>setMember({...member, email: m.target.value})}/><br/>
            <TextField label='City' required onChange={m=>setMember({...member, city: m.target.value})}/><br/>
            <Button className={'Button'} variant='contained' color='primary' onClick={add}>ADD</Button>
            <Link to='/members/all'><Button className={'Button'} variant='contained' color='secondary'>Cancel</Button></Link>
        </Paper>
    )
}

export default AddMember;
