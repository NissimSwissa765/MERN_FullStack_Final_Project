import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { deleteMovie } from "./moviesUtils.js";
import MovieWatchedList from "./movieWatchedList.js";


function MovieCard(props)
{
    return(
        <Paper style={{width: '100%', margin: '2%'}}>
            <div id={props.movie._id} className={'anchorShift'}></div>
            <p style={{fontSize: 9, color: "GrayText"}}>{props.movie._id}</p>
            <Grid item container direction='column' spacing={2} className={'MovieCard'}>
                <Grid item style={{padding: '1%'}}>
                    <Typography variant='h5'>
                        {props.movie.name}, <span >({props.movie.premiered})</span>
                    </Typography>
                    <Typography variant='subtitle2'>
                        {props.movie.genres.join(' - ')}
                    </Typography>
                </Grid>
                <Grid container spacing={2} className={'MovieCard'}>
                    <Grid item xs={2} style={{padding: '1%', justifyContent: 'center'}}>
                        <img src={props.movie.image.original} className={'Poster'} alt={props.movie.name}/>
                        <div style={{display: 'flex',justifyContent: 'space-around'}}>
                        <Link to={'/movies/edit/'+props.movie._id}><Button className={'Button'} variant='contained' color='primary'>Edit</Button></Link>
                        <Link to='/movies/'><Button className={'Button'} variant='contained' color='secondary' onClick={() => deleteMovie(props.movie._id)}>Delete</Button></Link>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='body2'>
                            <span dangerouslySetInnerHTML={{__html: props.movie.summary}}/>
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={'Paper'}>
                        <Typography variant='h6'>
                            users watched:
                        </Typography>
                        <MovieWatchedList id={props.movie._id}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}


export default MovieCard
