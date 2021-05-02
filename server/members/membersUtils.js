const { Promise } = require('mongoose');
const member = require('../members/memberModel');


export function getAllMembers()
{
    return new Promise((resolve,reject)=>
    {
       member.find({},function(err,data)
       {
           if(err)
           {
               reject(err)
           }
           else
           {
               resolve(data)
           }
       })
    })
}


exports.getAMember = function(id)
{
    return new Promise((resolve,reject)=>
    {
        member.findById(id,function(err,data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })

    })
}


export function addMember(data)
{
    return new Promise((resolve,reject)=>
    {
        let toAdd = new member(
            {
                name : data.name,
                email : data.email,
                city : data.city
            })
            toAdd.save(function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('added')
                }
            })
    })
}

export function updateMember(id,updateData)
{
    return new Promise((resolve,reject)=>
    {
        member.findByIdAndUpdate(id,
            {
                name : updateData.name,
                email : updateData.email,
                city : updateData.city

            },function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('Updated!')
                }
            })
    })
}


export function deleteMember(id)
{
    return new Promise((resolve,reject)=>
    {
        member.findByIdAndDelete(id,function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve('Deleted!')
            }
        })
    })
}