import * as mongoose from 'mongoose';

const uri =
  `mongodb+srv://admin:${process.env.DB_SECRET}@climbing.zahev.mongodb.net/?retryWrites=true&w=majority`;
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> => mongoose.connect(uri),
  },
];
