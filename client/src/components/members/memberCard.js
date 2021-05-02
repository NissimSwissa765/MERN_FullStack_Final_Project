import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { deleteMember } from "./membersUtils.js";
import '../../App.css';

function MemberCard(props)
{
    let onDelete = async ()=>
    {
        await deleteMember(props.member._id)
        window.location.replace('/members/all')
    }

    return(
                <Grid item style={{padding: '5px'}}>
                    <Paper className={'Paper'}>
                        <Typography variant='h5'>
                            {props.member.name}
                        </Typography>
                        <Typography variant='subtitle2'>
                            {props.member.city}
                        </Typography>
                        <Typography variant='subtitle2'>
                            {props.member.email}
                        </Typography>
                        <div style={{display: 'flex'}}>
                            <Link to={'/members/edit/'+props.member._id}>
                                <Button className={'Button'} variant='contained' color='primary'>Edit</Button>
                            </Link>
                            <Button className={'Button'} variant='contained' color='secondary' onClick={onDelete}>Delete</Button>
                        </div>
                    </Paper>
                </Grid>
    )
}


export default MemberCard
