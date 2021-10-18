import { Module } from '@nestjs/common';
import { CourseUtil } from './util/course.util';

@Module({
    imports:[CourseUtil]
})
export class CourseModule {}
