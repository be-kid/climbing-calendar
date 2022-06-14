import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const ScheduleSchema = new mongoose.Schema({
  date: String,
  participants: [
    {
      name: String,
      branch: String,
      time: String,
      password: String,
    },
  ],
});

@ObjectType()
export class Schedule extends Document {
  @Field()
  date: string;

  @Field()
  participants: [
    {
      name: string;
      branch: string;
      time: string;
      password: string;
    },
  ];
}
