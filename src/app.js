const clientMongoDB = require ('./mongo.connector')

const usersRouter = require('./users')
const projectsRouter = require('./projects')
const vacationRouter = require('./vacation')

clientMongoDB.init()
.then(client => {
    app.use('/users', usersRouter)
    app.use('/projects', projectsRouter)
    app.use('/vacation', vacationRouter)

    app.get('/', (req, res) => {
        res.send('TP initiation express')
    })

    app.listen(9999, () => {
        console.log('App listening on port 9999')
    })
})
.catch(err => {
    throw err
})