import { model, Document, Schema } from "mongoose";

// Declaro variaves na interface para depois fazer opreçoes usando o Document
interface Cordinates extends Document {
  latitude: number,
  longitude: number,
  nome: string,
  descricao:string
}

// Schema da tebela do banco
const cordinateSchema = new Schema({
    latitude: Number,
    longitude: Number,
    nome: String,
    descricao:String
})

const Cordinate = model<Cordinates>("Cordinates", cordinateSchema)

export default Cordinate
