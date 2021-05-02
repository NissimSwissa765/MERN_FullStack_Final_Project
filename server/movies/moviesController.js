const express = require('express');
const moviesUtils = require('../movies/moviesutils');
const appRoute = express.Router();


appRoute.route('/').get(async function(req,resp)
{
    let movies = await getAllMovies()
    return resp.json(movies)
})

appRoute.route(':/id').get(async function(req,resp)
{
    let id = req.params.id;
    let movie = await moviesUtils.getAMovie(id)
    return resp.json(movie)
})

appRoute.route(":/id").post(async function(req,resp)
{
    let newMovie = req.body;
    let addResult = await moviesUtils.addMovie(id,newMovie)
    return resp.json(addResult)    
})

appRoute.route(':/id').put(async function(req,resp)
{
    let id = req.params.id
    let newMovie = req.body
    let putResult = await moviesUtils.updateMovie(id,newMovie)
    return resp.json(putResult); 
})

appRoute.route(':/id').delete(async function(req,resp)
{
   let id = req.params.id;
   let deleteResault = await moviesUtils.deleteMovie(id)
   return resp.json(deleteResault)
})

module.exports = approute;