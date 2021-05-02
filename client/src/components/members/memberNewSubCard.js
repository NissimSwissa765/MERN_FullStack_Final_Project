import { Button, InputLabel, MenuItem, Paper, Select } from "@material-ui/core"
import { AddNewSubscription, getMoviesByMember } from "../subscriptionsUtils.js"
import { useEffect, useState } from "react"
import '../../App.css'
import { getAllMovies } from "../movies/moviesUtils"
import { Link } from "react-router-dom"

function NewSubCard(props)
{
    const [movies, setMovies] = useState([])
    const [newSub, setNewSub] = useState({})
    const [watched, setWatched] = useState([])
    
    useEffect(()=>{
        async function getMovies()
        {
            let m = await getAllMovies()
            setMovies([...m])
        }
        async function getSubs() {
            let subs = await getMoviesByMember(props.id)
            if(subs.length>0)
            {
                let s = []
                subs.forEach(async sub => {
                    s.push(sub.movie_id)
                    if(s.length===subs.length)
                    {
                        setWatched(s)
                    }
                })
            }
        }
        getSubs()
        getMovies()
        setNewSub({...newSub, member_id: props.id})
    }, [])

    let addMovie = (id) =>
    {
        setNewSub({...newSub, movie_id: id})
    }

    let addDate = (date) =>
    {
        setNewSub({...newSub, date: date})
    }

    let moviesList = movies.filter(f=> !watched.includes(f._id)).map(m => {
        return <MenuItem key={m._id} value={m._id}>{m.name}</MenuItem>
    })

    return(
        <Paper className={'Paper'}>
            <InputLabel>Select a new watched</InputLabel>
            <Select onChange={e=>{
                addMovie(e.target.value)
                }} style={{minWidth: '120px'}}>
                {moviesList}
            </Select>
            <br/><br/>
            <input type='date' onChange={e => addDate(e.target.value)}/>
            <Link to='/members/all'>
                <Button className={'Button'} variant='contained' color='primary' onClick={() => AddNewSubscription(newSub)}>add new watched</Button>
            </Link>
            <br/>
        </Paper>
    )
}

export default NewSubCard
