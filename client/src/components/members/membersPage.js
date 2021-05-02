import { Breadcrumbs, Grid } from "@material-ui/core"
import { Link, Route, Switch } from "react-router-dom"
import AddMember from "./addMember.js"
import EditMember from "./editMember.js"
import NewSub from "./memberNewSubPage.js"
import Members from "./membersAll.js"

function MembersPage()
{
    return(
        <div style={{alignContent: 'center', display: 'flex'}}>
            <Grid container direction='column' spacing={2}>
            <Grid item>
                <Breadcrumbs>
                    <Link to='/members/all'>All Members</Link>
                    <Link to='/members/add'>Add A Member</Link>
                </Breadcrumbs>
            </Grid>
            <Grid item>
                <Switch>
                    <Route path='/members/all' component={Members}/>
                    <Route path='/members/add' component={AddMember}/>
                    <Route path='/members/edit/:id' component={EditMember}/>
                    <Route path='/members/newsub/:id' component={NewSub}/>
                </Switch>
            </Grid>
            </Grid>
        </div>
 
    )
}


export default MembersPage
