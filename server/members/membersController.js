const express = require('express');
const memberUtils = require('../members/memberutils');
const appRoute = express.Router();


appRoute.route('/').get(async function(req,resp)
{
    let members = await memberUtils.getAllMembers();
    return resp.json(members);
})

appRoute.route('/:id').get(async function(req,resp)
{
    let id = req.params.id;
    let member = await memberUtils.getAMember(id);
    return resp.json(member)

})

appRoute.route('/:id').post(async function(req,resp)
{
    let newMember = req.body;
    let result = await memberUtils.addMember(id,newMember);
    return resp.json(result);
})

appRoute.route('/:id').put(async function(req,resp)
{
    let id = req.params.id;
    let newMember = req.body;
    let result = await memberUtils.updateMember(id,newMember);
    return resp.json(result);
})

appRoute.route('/:id').delete(async function(req,resp)
{
    let id = req.params.id;
    let result = await memberUtils.deleteMember(id)
    return resp.json(result);
})


module.exports = appRoute;