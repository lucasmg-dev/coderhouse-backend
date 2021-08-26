/*----------------------------*/
/*    graphiQL -> get all     */
/*----------------------------*/
{
    palabras {
        palabras
    }
}

/*-----------------------------*/
/*     graphiQL -> guardar     */
/*-----------------------------*/
mutation {
    guardarPalabra(palabra : "Hola") {
            _id
    		timestamp
            palabra
		}
}
