
const http = require('http');


http.createServer( (req, res ) => {

    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.writeHead(200, { 'Content-Type': 'text/plain' });

    // const persona = {
    //     id: 1,
    //     nombre: 'Miguel'
    // }
    // res.write( JSON.stringify( persona ) );
    // res.write( 'id, nombre\n');
    // res.write( '1, Miguel\n');
    // res.write( '2, Maria\n');
    // res.write( '3, Juan\n');
    // res.write( '4, Pedro\n');
    res.write('Hola Mundo')
    res.end();

})
.listen( 8080 );


console.log('Escuchando el puerto ', 8080);

