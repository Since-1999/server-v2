import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import {Response} from 'express'

@Controller('user')
export class UserController {

    @Post('/signup')
    async signUp(@Body() data:any, @Res() res: Response): Promise<Response>{
        return res.status(HttpStatus.OK).json({
            message: `This is sign up.`
        })
    }

    @Post('/signin')
    async signIn(@Body() data: any, @Res() res: Response): Promise<Response>{
        return res.status(HttpStatus.OK).json({
            message: `This is sign in.`
        })
    }

    @Get('/getmarkstudentfile')
    async getMarkStudentFile(@Res() res: Response): Promise<Response>{
        return res.status(HttpStatus.OK).json({
            message: `This is get mark student file.`
        })
    }

    @Get('/a')
    async a(@Res() res: Response): Promise<Response>{
        return res.status(HttpStatus.OK).json({
            message: `a`
        })
    }

}
