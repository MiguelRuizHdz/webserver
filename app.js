require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

// middleware: función que se ejecuta antes de hacer otra cosa.
// Servir contenido estático
app.use( express.static('public'));

// app.get('/', (req, res) => {
//   res.render('home', {
//       nombre: 'Miguel Ruiz',
//       titulo: 'Curso de Node'
//   });
// });

// app.get('/hola-mundo', (req, res) => {
//   res.send('Hola Mundo')
// });

// app.get('/generic', (req, res) => {
//     res.render('generic', {
//         nombre: 'Miguel Ruiz',
//         titulo: 'Curso de Node'
//     });
// });

// app.get('/elements', (req, res) => {
//     res.render('elements', {
//         nombre: 'Miguel Ruiz',
//         titulo: 'Curso de Node'
//     });
// });

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/index.html')
});
 
// app.get('*', (req, res) => {
// //   res.send('404 | Page not found')
//     res.sendFile( __dirname + '/public/404.html')
// });
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});