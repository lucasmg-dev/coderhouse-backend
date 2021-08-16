import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const ProductoSchema = new Schema({
  nombre: String,
  apellido: String,
  DNI: Number
});
const ProductoModel = mongoose.model('productos', ProductoSchema);

export default class persistenciaMongo {
    constructor() {
        ;( async () => {
            try {
                await mongoose.connect('mongodb://localhost/mvc', {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useFindAndModify: false,
                    useCreateIndex: true
                });
                console.log('Base de datos conectada')
            }
            catch(error) {
                console.log(error)
            }
        })()
    }
    obtenerPersonas = async () => {
        try {
            return await ProductoModel.find({}).lean()
        }
        catch(error) {
            console.log(error)
        }
    }
    agregarPersona = async persona => {
        try {
            const instance = new ProductoModel(persona);
            await instance.save()
        }
        catch(error) {
            console.log(error)
        }
    }
}


