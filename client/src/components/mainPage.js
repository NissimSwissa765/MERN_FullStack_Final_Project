import { Button, AppBar, Typography, Breadcrumbs, Grid, Container } from "@material-ui/core"
import { Switch, Route, Redirect } from "react-router"
import { Link } from "react-router-dom"
import {MoviesPage} from './movies/moviesPage.js'

import '../App.css'
import Subscriptions from "./members/membersPage"

function clear()
{
  sessionStorage.clear()
  window.location.assign('/')
}

function MainPage(props)
{
    return(
    <Container>
    <AppBar className={'AppBar'}>
        <Grid container spacing={2}>
            <Grid item xs={9}>
                <Typography variant='h5' style={{textAlign: 'match-parent', padding: '1%'}}>
                    Moives Subscriptions
                </Typography>
            </Grid>
            <Grid item xs={3}>  
               <span>
                Hi, {sessionStorage['name']}
                <Button className={'LOGOUT'} color='secondary' variant='contained' size='small' onClick={() => clear()}>
                    LOGOUT
                </Button>
                </span>
            </Grid>
        </Grid>
            <Breadcrumbs aria-label='breadcrumb' style={{alignSelf: 'center', margin:'0.5%'}}>
                <Link to='/movies' color='inherit'>
                    Movies
                </Link>
                <Link to='/members' color='inherit'>
                    Subscriptions
                </Link>
            </Breadcrumbs>
    </AppBar>

    <div className={'MainDiv'}>
    <Switch>
        <Route path='/movies' component={MoviesPage}/>
        <Route path='/members' component={Subscriptions}/>
    </Switch>

    <Redirect exact to='/movies'/>
    </div>
    
    </Container>
    )
}

export default MainPage
