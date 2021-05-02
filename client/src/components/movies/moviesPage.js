import { Breadcrumbs, Grid } from "@material-ui/core";
import { Redirect, Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import AddMovie from "./addMovie";
import EditMovie from "./editMovie";
import Movies from "./moviesAll";

export function MoviesPage()
{
    return(
        <div style={{alignContent: 'center', display: 'flex'}}>
            <Grid container direction='column' spacing={2}>
            <Grid item>
                <Breadcrumbs>
                    <Link to='/movies/all'>All Movies</Link>
                    <Link to='/movies/add'>Add A Movie</Link>
                </Breadcrumbs>
            </Grid>
            <Grid item>
                <Switch>
                    <Route exact path='/movies/all/' component={Movies}/>
                    <Route path='/movies/add' component={AddMovie}/>
                    <Route path='/movies/edit/:id' component={EditMovie}/>
                    <Route path='/movies/all/:page' component={Movies}/>
                </Switch>
                <Redirect to='/movies/all/'/>
            </Grid>
            </Grid>
        </div>
 
    )
}
