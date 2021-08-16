const express = require('express');
const { graphqlHTTP }  = require('express-graphql');
const { buildSchema } = require('graphql');

var path = require('path');
var productosRouter = require('./routes/productos');

// GraphQL schema
const schema = buildSchema(`
    type Query {
        mensaje: String,
        articulos: [Articulo]
    }
    type Mutation {
        guardarArticulo(titulo: String!,texto: String!,autor: String!,): Articulo
    },
    type Articulo {
        titulo: String
        texto: String
        autor: String
    }    
`);

const articulos = []

var guardarArticulo = function({titulo,texto,autor}) {
    let articulo = {titulo,texto,autor}
    articulos.push(articulo);
    return articulo
}

// Root resolver
const root = {
    mensaje: () => 'GraphQL: Ingrese Artículo',
    articulos : () => articulos,
    guardarArticulo : guardarArticulo
};


// Create an express server and a GraphQL endpoint
const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static('public'))

app.use(express.json());
app.use('/productos', productosRouter);

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor express GraphQL escuchando en http://localhost:${server.address().port}/graphql`));
server.on('error', error => console.error('Error en Servidor GraphQL', error))