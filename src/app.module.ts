import { Module } from '@nestjs/common';
import { DATABASE_CONFIG } from 'configs/database/database.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarkModule } from './mark/mark.module';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { FacultyModule } from './faculty/faculty.module';
import { SemecterModule } from './semecter/semecter.module';

@Module({
  imports: [
    DATABASE_CONFIG,
    MarkModule,
    StudentModule,  
    CourseModule,
    FacultyModule,
    SemecterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
