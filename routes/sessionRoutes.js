const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const Category = mongoose.model('categories')



module.exports = app => {
//categories 

  app.get('/api/categories',requireLogin,async (req,res)=>{
    const categories=await Category.find({
      _user:req.user.id
    })
  
    
    res.send(categories)
  })
  app.post('/api/categories/',requireLogin, async (req, res) => {
    const { name } = req.body
    const category = new Category({
      name,
      _user: req.user.id
    })
    await category.save()
  })

  app.delete('/api/categories/:id',requireLogin,async (req,res)=>{


    const query ={_id:req.params.id}
    await Category.deleteOne(query,(err,response)=>{
    if(err){
        return console.log(err);
        
    }
    res.sendStatus(200);
  });
  })
}
