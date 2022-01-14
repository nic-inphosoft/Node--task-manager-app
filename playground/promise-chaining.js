require ('../src/db/mongoose')
const User = require('../src/models/user')

//  User.findByIdAndUpdate('61dbd5f4084980fd05323647', {age:1}).then((user)=>{
    
//     return User.countDocuments({age: 1})
//  }).then((result)=>{
//     console.log(result)
//  }).catch((e)=>{
//      console.log(e)
//  })

 const updateAgeAndCount = async (id, age)=>{
   const user = await User.findByIdAndUpdate(id, {age})
   const count = await User.countDocuments({age})
   return count

 }

 updateAgeAndCount('61dbd5f4084980fd05323647', 9).then((count)=>{
   console.log(count)
 }).catch((e)=>{
   console.log(e)
 })