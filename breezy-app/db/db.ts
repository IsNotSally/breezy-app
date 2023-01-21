import mongoose from 'mongoose';

const dbUrl = 'mongodb://127.0.0.1:27017/breezy-app';

// mongoose.set('', true);
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Mongoose connected!');
});

export default mongoose;
