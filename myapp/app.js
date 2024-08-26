const express = require('express')
const app = express()
const port = 3000
const routePerson = require('./route.person');

app.use('/person', routePerson);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})