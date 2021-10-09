import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UserMiddleware } from './middleware/user.middleware';
import { UserService } from './service/user.service';
import { UserController } from './user.controller';

@Module({
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {
    configure(consumer: MiddlewareConsumer){
        consumer.apply(UserMiddleware)
        .forRoutes({ path: 'user/getmarkstudentfile', method: RequestMethod.GET});

    }
}
