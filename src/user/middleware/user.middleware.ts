import { NestMiddleware } from "@nestjs/common";
import {Request, Response} from 'express';

export class UserMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: () => void) {
        next();
    }

}   