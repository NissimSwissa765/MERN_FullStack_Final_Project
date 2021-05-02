import { Button, Paper, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAMember, updateMember } from "./membersUtils.js";

function EditMember(props)
{
    const [member, setMember] = useState({name:'', email: '', city: ''})

    let onLoad = async () =>
    {
        console.log(props.match.params.id);
        setMember(await getAMember(props.match.params.id))
    }

    useEffect(()=>{
        onLoad()
    }, [member._id])

    const update = async () =>
    {
        await updateMember(member)
        props.history.push('/members/all')
    }

    return(
        <Paper className={'Paper'}>
            <h3>Edit Member</h3>
            <TextField label='Member Name' required value={member.name} onChange={m=>setMember({...member, name: m.target.value})}/><br/>
            <TextField label='Email' required value={member.email} onChange={m=>setMember({...member, email: m.target.value})}/><br/>
            <TextField label='City' required value={member.city} onChange={m=>setMember({...member, city: m.target.value})}/><br/>
            
            <Button className={'Button'} variant='contained' color='primary' onClick={update}>UPDATE</Button>
            <Link to='/members/all'><Button className={'Button'} variant='contained' color='secondary'>Cancel</Button></Link>
        </Paper>
    )
}

export default EditMember;
