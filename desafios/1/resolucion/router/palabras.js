import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import config from '../config.js'

import ControladorPalabras from '../controlador/palabras.js'


class RouterPalabras {

    constructor() {
        this.controladorPalabras = new ControladorPalabras()
    }

    start() {
        // GraphQL schema
        const schema = buildSchema(`
            type Palabra {
                _id: String,
                timestamp: Float,
                palabra: String
            },
            type Palabras {
                palabras: String
            },
            type Query {
                palabras: Palabras
            }
            type Mutation {
                guardarPalabra(
                    palabra: String!,
                ): Palabra
            }
        `);

        // Root resolver
        const root = {
            palabras: () => this.controladorPalabras.obtenerPalabras(),
            guardarPalabra: this.controladorPalabras.guardarPalabra,
        };

        return graphqlHTTP({
            schema: schema,
            rootValue: root,
            graphiql: config.GRAPHIQL == 'true'
        })
    }
}

export default RouterPalabras