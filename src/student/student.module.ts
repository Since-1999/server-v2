import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UserMiddleware } from './middleware/user.middleware';
import { StudentService } from './service/student.service';
import { StudentController } from './student.controller';


@Module({
    controllers: [StudentController],
    providers: [StudentService],
})
export class StudentModule {
    configure(consumer: MiddlewareConsumer){
        consumer.apply(UserMiddleware)
        .forRoutes({ path: 'user/getmarkstudentfile', method: RequestMethod.GET});

    }
}
