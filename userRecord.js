const userModel= require('./models/userModel')
const Record=new userModel ({
    name:"mohamed",
    age:18,
    favoriteFoods:["couscous","pizza","soup","zmoita"]

})

Record.save()
.then(doc =>{
    console.log(doc)
})
.catch(err =>{
    console.error(err)
}
    )