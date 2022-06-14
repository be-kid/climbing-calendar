import { Resolver, Query } from '@nestjs/graphql';
import { Schedule } from 'src/schemas/schedule.schema';
import { ScheduleService } from './schedule.service';

@Resolver('Schedule')
export class ScheduleResolver {
  constructor(private scheduleService: ScheduleService) {}

  @Query(()=>[Schedule])
  async getAllSchedule() {
    return await this.scheduleService.findAll();
  }
}
