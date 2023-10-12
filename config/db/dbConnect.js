const mongoose = require('mongoose')

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb+srv://Sandeepsai:Sandeepsepfive@cluster0.se3fjvu.mongodb.net/?retryWrites=true&w=majority", 
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })

        console.log('Db Connected Succesfully')
    } catch(error) {
        console.log(`Error ${error}`)
    }
}

module.exports = dbConnect;