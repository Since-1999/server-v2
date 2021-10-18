import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {Response} from 'express'

@ApiTags('Student')
@Controller('student')
export class StudentController {

    @Post('/signup')
    @ApiOkResponse({description: ''})
    @ApiNotFoundResponse({description: ''})
    @ApiBadRequestResponse({description: ''})
    async signUp(@Body() data:any, @Res() res: Response): Promise<Response>{
        return res.status(HttpStatus.OK).json({
            message: `This is sign up.`
        })
    }

    @Post('/signin')
    @ApiOkResponse({description: ''})
    @ApiNotFoundResponse({description: ''})
    @ApiBadRequestResponse({description: ''})
    async signIn(@Body() data: any, @Res() res: Response): Promise<Response>{
        return res.status(HttpStatus.OK).json({
            message: `This is sign in.`
        })
    }

    @Post('/getmarkstudentfile')
    @ApiOkResponse({description: ''})
    @ApiNotFoundResponse({description: ''})
    @ApiBadRequestResponse({description: ''})
    async getMarkStudentFile(@Body() data: any,@Res() res: Response): Promise<Response>{
        return res.status(HttpStatus.OK).json({
            message: `This is get mark student file.`
        })
    }

    @Get('/a')
    @ApiOkResponse({description: ''})
    @ApiNotFoundResponse({description: ''})
    @ApiBadRequestResponse({description: ''})
    async a(): Promise<any>{
        return "A";
    }

}
