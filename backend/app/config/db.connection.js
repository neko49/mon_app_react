const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect(`mongodb+srv://regis:A%40zerty678@moncluster.6gq7hus.mongodb.net/my_database`, {
    useNewUrlParser: true,
    //useCreateIndex: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});
