import { Body, Controller,  Post,  Res } from '@nestjs/common';
import { CourseException } from 'src/course/exception/CourseException';
import { Courses, CourseUtil } from 'src/course/util/course.util';
import { FacultyUtil } from 'src/faculty/util/faculty.util';
import { Response } from 'express';
import { MarkService } from './service/search-mark.service';
import { StudentDTO } from 'src/student/dto/student.dto';
import { StudentUtil } from 'src/student/util/student.util';
import { StudentException } from 'utils/exceptions/StudentException';

@Controller('search-mark')
export class MarkController {

    constructor(private searchMark: MarkService) { }

    @Post()
    async getMarkByStudentId(@Body() data: any, @Res() res: Response) {
        let resultCheck = StudentUtil.validateStudentCode(data.studentCode);

        if (resultCheck == true) {
            let facultyCode = FacultyUtil.getFacultyCode(data.studentCode);
            let course = CourseUtil.getCourse(data.studentCode);

            if (
                course == Courses.COURSE_17 ||
                course == Courses.COURSE_18 ||
                course == Courses.COURSE_19 ||
                course == Courses.COURSE_20
            ) {
                let student = await this.searchMark.getMarkByStudentCode(data.studentCode, course, facultyCode);

                if (student != null && student.length != 0) {
                    let studentDto: StudentDTO = new StudentDTO();
                    studentDto.code = student[0].Column2;
                    studentDto.name = `${student[0].Column3} ${student[0].Column4}`;
                    studentDto.class = student[0].Column5;
                    studentDto.mark = student[0].Column35;
                    studentDto.subject = student[0].Column37;
                    studentDto.credits = student[0].Column36;


                    return res.status(200).json({
                        "messages":[
                            {
                                "text": StudentUtil.getTemplateInforStudent(studentDto)
                            }
                        ]
                        
                    });
                } else {
                    return res.status(200).json({
                        "messages": [
                            {
                                "text": StudentException.STUDENT_NOT_FOUND
                            }    
                        ]
                        
                    });
                }

            } else {
                return res.status(200).json({
                    "messages": [
                        {
                            "text": CourseException.getExceptionNotFoundCourse(course)
                        }
                    ]                    
                });
            }

        } else {
            return res.status(200).json({
                "messages":[
                    {
                        "text": StudentException.STUDENT_CODE_ISVALID
                    }
                ]
            });
        }
    } 
}
