import { Connection } from 'mongoose';
import { ScheduleSchema } from 'src/schemas/schedule.schema';

export const ScheduleProviders = [
  {
    provide: 'SCHEDULE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('climbing', ScheduleSchema, 'Schedule'),
    inject: ['DATABASE_CONNECTION'],
  },
];
