import { Button, Paper, TextField } from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addMovie } from "./moviesUtils.js";

function AddMovie()
{
    const [movie, setMovie] = useState({name: '', premiered: '', genres: [], image: {original: ''}})

    const add = async () =>
    {
        await addMovie(movie)
        
    }

    return(
        <Paper className={'Paper'}>
            <h3>Add A Movie</h3>
            <TextField label='Movie Name' required onChange={m=>setMovie({...movie, name: m.target.value})}/><br/>
            <TextField label='Year Permiered' required onChange={m=>setMovie({...movie, premiered: m.target.value})}/><br/>
            <TextField label='Genres' required onChange={m=>setMovie({...movie, genres: m.target.value.split(', ')})}/><br/>
            <TextField label='Image URL' required onChange={m=>setMovie({...movie, image: {original: m.target.value}})}/><br/>
            <Link to='/movies/all'><Button className={'Button'} variant='contained' color='primary' onClick={add}>ADD</Button></Link>
            <Link to='/movies/all'><Button className={'Button'} variant='contained' color='secondary'>Cancel</Button></Link>
        </Paper>
    )
}

export default AddMovie;
