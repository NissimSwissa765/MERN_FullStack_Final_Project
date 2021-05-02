const user = require('../users/userModel');

export function getAllUsers()
{
    return new Promise((resolve,reject)=>
    {
        user.find({},function(err,data)
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


export function getaUser ()
{
    return new Promise((resolve,reject)=>
    {
        user.findById(id,function(err,data)
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


export function addUser(newuser)
{
    return new Promise((resolve,reject)=>
    {
        let toAddUser = new user(
            {
                name : newUser.name,
                userName : newUser.userName,
                password : newUser.password
            })
            toAddUser.save(function()
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

export function updateUser(id,updateData)
{
    return new Promise((resolve,reject)=>
    {
        user.findByIdAndUpdate(id,
            {
                name : updateData.name,
                userName : updateData.userName,
                password : updateData.password
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


export function deleteUser()
{
    return new Promise((resolve,reject)=>
    {
        user.findByIdAndDelete(id,function(err)
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