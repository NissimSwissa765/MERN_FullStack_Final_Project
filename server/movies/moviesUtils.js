const movie = require('../movies/moviesModel');

export function getAllMovies()
{
    return new Promise((resolve,reject)=>
    {
        movie.find({},function(err,data)
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


export function getAMovie(id)
{
    return new Promise((resolve,reject)=>
    {
        movie.findById(id,function(err,data)
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


export function addMovie(data)
{
    return new Promise((resolve,reject)=>
    {
        let toAddMovie = new movie(
            {
                name : data.name,
                premiered : data.premiered,
                genres : data.genres,
                image : data.image
            })
            toAddMovie.save(function(err)
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


export function updateMovie(id,updateData)
{
    return new Promise((resolve,reject)=>
    {
        movie.findByIdAndUpdate(id,
            {
                name : updateData.name,
                premiered : updateData.premiered,
                genres : updateData.genres,
                image : updateData.image
            },function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('Updeted!')
                }
            })
    })
}


export function Delete(id)
{
    return new Promise((resolve,reject)=>
    {
        movie.findByIdAndDelete(id,function(err)
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