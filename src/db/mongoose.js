const mongoose = require('mongoose')
//PORT=3000
// SENDGRID_API_KEY=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
// MONGODB_URL=mongodb://127.0.0.1:27017/task-manager-api
// JWT_SECRET=thisismynewcourse
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

