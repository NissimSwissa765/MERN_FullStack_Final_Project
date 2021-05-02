const subscription = require('./subscriptionsModel');

export function getAllSubs()
{
    return new Promise((resolve,reject)=>
    {
        subscription.find({},function(err,data)
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

export function findASub(id)
{
    return new Promise((resolve,reject)=>
    {
        subscription.findById(id,function(err,data)
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


export function addSub(newSub)
{
    return new Promise((resolve,reject)=>
    {
       let AddNewSub = new subscription(
           {
               member_id : newSub.member_id,
               movie_id : newSub.movie_id,
               date : newSub.date
           })
           AddNewSub.save(function(err)
           {
               if(err)
               {
                   reject(err)
               }
               else
               {
                   resolve('Created!')
               }
           })
    })
}



export function updateSub(id,updateData)
{
    return new Promise((resolve,reject)=>
    {
       subscription.findByIdAndUpdate(id,
        {
            member_id : updateData.member_id,
            movie_id : updateData.movie_id,
            date : updateData.date
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


export function deleteSub(id)
{
    return new Promise((resolve,reject)=>
    {
        subscription.findByIdAndDelete(id,function(err)
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