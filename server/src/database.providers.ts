import * as mongoose from 'mongoose';

const uri =
  'mongodb+srv://admin:Py22qYJorLYH3Kmu@climbing.zahev.mongodb.net/?retryWrites=true&w=majority';
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> => mongoose.connect(uri),
  },
];
