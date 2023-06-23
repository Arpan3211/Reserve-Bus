import mongoose from "mongoose"; // importing mongoose liaberary 


//function for connecting to the mongoDB database
const connectDB = (url) => { //providing url as a props 

  mongoose.connect(url)
    // showing connection message in connection sucessfull
    .then(() => console.log("MongoDB is connected"))
    // showing error if connection is not complete
    .catch((err) => console.log(err))
}

//exporting the connection function 
export default connectDB;