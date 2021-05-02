import axios from "axios";
import { Auth } from "../authenticate.js";



const url = 'http://127.0.0.1:2000/subscriptions/'

function auth_failed()
{
    sessionStorage.clear()
    window.location.assign('/')
    console.log('Authentication Failed');
}


export async function getAllSubs()
{
    let auth = await Auth()
    if(auth)
    {
        let resp = await axios.get(url)
        return resp.data
    }
    else
    {
        auth_failed()
    }
}

export async function AddNewSubscription(sub)
{
    let auth = await Auth()
    if(auth)
    {
        let resp = await axios.post(url, sub)
        console.log(resp.data);
    }
    else
    {
        auth_failed()
    }
}

export async function getMoviesByMember(member_id)
{
    let auth = await Auth()
    if(auth)
    {
        let resp = await axios.get(url+'member/'+member_id)
        return resp.data
    }
    else
    {
        auth_failed()
    }
}

export async function getMembersByMovie(movie_id)
{
    let auth = await Auth()
    if(auth)
    {
        let resp = await axios.get(url+'movie/'+movie_id)
        return resp.data
    }
    else
    {
        auth_failed()
    }
}
