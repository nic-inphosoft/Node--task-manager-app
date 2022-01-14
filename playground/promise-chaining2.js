require ('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('61dbca1344551dfb4edb0bed').then((tasks)=>{
//     return Task.countDocuments({completed:true})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async(id)=>{
    const del = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('61dbef1bacb43b027dbb34a8').then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})
