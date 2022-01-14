const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// const Task = mongoose.model('New Tasks',{
//     description:{
//         type:String,
//         required: true,
//         trim: true
//     },
//     completed:{
//         type:Boolean,
//         required:false,
//         default: false
//     }
// })

// const taskModel = new Task({
//     description:'playing',
    
// })

// taskModel.save().then((taskModel)=>{
//     console.log(taskModel)
// }).catch((error)=>{
//     console.log('Error', error)
// })

