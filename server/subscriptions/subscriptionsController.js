const express = require('express');
const { put } = require('../movies/moviesController');

const subscriptionsUtils = require('./subscriptionsUtils');

const appRoute = express.Router();

appRoute.route('/').get(async function(req,resp)
{
    let subs = await subscriptionsUtils.getAllSubs()
    return resp.json(subs)
})

appRoute.route('/:id').get(async function(req,resp)
{
    let id = req.params.id
    let sub = await subscriptionsUtils.getASub(id)
    return resp.json(sub)
})

appRoute.route('/').post(async function(req,resp)
{
    let newSub = req.body;
    let subPost = await subscriptionsUtils.updatesub(newSub)
    return resp.json(subPost)
})

appRoute.route('/:id').put(async function(req,resp)
{
   let id = req.params.id;
   let newSub = req.body
   let putResult = await subscriptionsUtils.addSub(id,newSub)
   return resp.json(putResult)
})

appRoute.route('/:id').delete(async function(req,resp)
{
    let id = req.params.id;
    let result = await subscriptionsUtils.deleteSub(id)
    return resp.json(result)
})

module.expors = appRoute;