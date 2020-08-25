import mongoose from "mongoose"

mongoose.connect(
  "mongodb://127.0.0.1:27017/aqui_tem",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
)

export default mongoose