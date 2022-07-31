const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const chalk = require('chalk')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const PORT = config.get('port') ?? 8080

app.listen(8080, () => {
    console.log(chalk.green(`Server has been started on port ${PORT}...`))
})