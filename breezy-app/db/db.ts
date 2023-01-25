import mongoose from 'mongoose';
import { env } from 'process';

mongoose.connect(env.DBURL!);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Mongoose connected!');
});

export default mongoose;
