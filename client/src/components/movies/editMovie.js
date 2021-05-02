import { Button, Paper, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAMovie, updateMovie } from "./moviesUtils.js";

function EditMovie(props)
{
    const [movie, setMovie] = useState({name:'', premiered: '', genres: [], image: {original: ''}})

    let onLoad = async () =>
    {
        setMovie(await getAMovie(props.match.params.id))
    }

    useEffect(()=>{
        onLoad()
    }, [movie._id])

    const update = async () =>
    {
        await updateMovie(movie)
    }

    return(
        <Paper className={'Paper'}>
            <h3>Edit Movie</h3>
            <TextField label='Movie Name' required value={movie.name} onChange={m=>setMovie({...movie, name: m.target.value})}/><br/>
            <TextField label='Year Permiered' required value={movie.premiered} onChange={m=>setMovie({...movie, premiered: m.target.value})}/><br/>
            <TextField label='Genres' required value={movie.genres.join(', ')} onChange={m=>setMovie({...movie, genres: m.target.value.split(', ')})}/><br/>
            <TextField label='Image URL' required value={movie.image.original} onChange={m=>setMovie({...movie, image: {original: m.target.value}})}/><br/>
            <Link to='/movies/all'><Button className={'Button'} variant='contained' color='primary' onClick={update}>UPDATE</Button></Link>
            <Link to='/movies/all'><Button className={'Button'} variant='contained' color='secondary'>Cancel</Button></Link>
        </Paper>
    )
}

export default EditMovie;
