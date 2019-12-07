const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const webpackConfig = require('./webpack.config.dev');

const compiler = webpack(webpackConfig);
const app = express();

app.use('/', express.static(path.resolve(__dirname, '..')));
app.use(cors());
app.use(middleware(compiler, { publicPath: '/dist', writeToDisk: true }));


const run = fs.readFileSync(path.resolve(__dirname, '..', 'examples', 'browser', 'run.html'));
const trim = fs.readFileSync(path.resolve(__dirname, '..', 'examples', 'browser', 'trim.html'));
const webcam = fs.readFileSync(path.resolve(__dirname, '..', 'examples', 'browser', 'webcam.html'));

app.use('/run', (req, res) => res.type('html').send(run));
app.use('/trim', (req, res) => res.type('html').send(trim));
app.use('/webcam', (req, res) => res.type('html').send(webcam));

module.exports = app.listen(80, () => {
  console.log('Server is running on port 80');
});
