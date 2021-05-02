const express = require('express');
const { use } = require('../movies/moviesController');
const usersUtils = require('../users/usersUtils');

const appRoute = express.Router()

appRoute.route('/').get(async function(req,resp)
{
    let users = await usersUtils.getAllUsers()
    return resp.json(users);
})

appRoute.route('/:id').get(async function(req,resp)
{
    let id = req.params.id;
    let user = await usersUtils.getAUser(id);
    return resp.json(user)
})

appRoute.route('/').post(async function(req,resp)
{
    let newUser = req.body;
    let result  = await usersUtils.addUser(newUser);
    return resp.json(result);
})

appRoute.route('/:id').put(async function(req,resp)
{
    let id = req.params.id;
    let newUser = req.body;
    let result = await usersUtils.updateUser(id,newUser);
    return resp.json(result);
})

appRoute.route('/:id').delete(async function(req,resp)
{
    let id = req.params.id;
    let result = await usersUtils.deleteUser(id);
    return resp.json(result)

})

module.exports = appRoute;