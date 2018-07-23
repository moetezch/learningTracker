const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const Session = mongoose.model('sessions')
const Category = mongoose.model('categories')
const Project = mongoose.model('projects')


module.exports = app => {

  //sessions 

  app.get('/api/sessions', requireLogin, async (req, res) => {
    const sessions = await Session.find({
      _user: req.user.id
    })
    res.send(sessions)
  })
  app.post('/api/sessions/', requireLogin, async (req, res) => {
    const { name } = req.body
    const session = new Session({
      name,
      _user: req.user.id
    })
    await session.save()
  })

  app.delete('/api/sessions/:id', requireLogin, async (req, res) => {
    const query = { _id: req.params.id }
    await Session.deleteOne(query, (err, response) => {
      if (err) {
        return console.log(err);

      }
      res.sendStatus(200);
    });
  })

  //categories 

  app.get('/api/categories', requireLogin, async (req, res) => {
    const categories = await Category.find({
      _user: req.user.id
    })
    res.send(categories)
  })
  app.post('/api/categories/', requireLogin, async (req, res) => {
    const { name } = req.body
    const category = new Category({
      name,
      _user: req.user.id
    })
    await category.save()
  })

  app.delete('/api/categories/:id', requireLogin, async (req, res) => {
    const query = { _id: req.params.id }
    await Category.deleteOne(query, (err, response) => {
      if (err) {
        return console.log(err);

      }
      res.sendStatus(200);
    });
  })

  // Projects 

  app.get('/api/projects', requireLogin, async (req, res) => {
    const projects = await Project.find({
      _user: req.user.id
    })
    res.send(projects)
  })
  app.post('/api/projects/', requireLogin, async (req, res) => {
    const { name } = req.body
    const project = new Project({
      name,
      _user: req.user.id
    })
    await project.save()
  })

  app.delete('/api/projects/:id', requireLogin, async (req, res) => {
    const query = { _id: req.params.id }
    await Project.deleteOne(query, (err, response) => {
      if (err) {
        return console.log(err);
      }
      res.sendStatus(200);
    });
  })
}
