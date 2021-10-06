import { Controller, Get, Query, Res } from '@nestjs/common';
import { StudentDTO } from 'core/dto/StudentDTO';
import { CourseException } from 'core/exception/CourseException';
import { StudentException } from 'core/exception/StudentException';
import { Courses, CourseUtil } from 'core/utils/CourseUtil';
import { FacultyUtil } from 'core/utils/FacultyUtil';
import { StudentUtil } from 'core/utils/StudentUtil';
import { Response } from 'express';
import { SearchMarkService } from './service/search-mark.service';

@Controller('search-mark')
export class SearchMarkController {

    constructor(private searchMark: SearchMarkService) { }

    @Get()
    async getMarkByStudentId(@Query('studentCode') studentCode: string, @Res() res: Response) {
        let resultCheck = StudentUtil.validateStudentCode(studentCode);

        if (resultCheck == true) {
            let facultyCode = FacultyUtil.getFacultyCode(studentCode);
            let course = CourseUtil.getCourse(studentCode);

            if (
                course == Courses.COURSE_17 ||
                course == Courses.COURSE_18 ||
                course == Courses.COURSE_19 ||
                course == Courses.COURSE_20
            ) {
                let student = await this.searchMark.getMarkByStudentCode(studentCode, course, facultyCode);

                if (student != null && student.length != 0) {
                    let studentDto: StudentDTO = new StudentDTO();
                    studentDto.code = student[0].Column2;
                    studentDto.name = `${student[0].Column3} ${student[0].Column4}`;
                    studentDto.class = student[0].Column5;
                    studentDto.mark = student[0].Column35;
                    studentDto.subject = student[0].Column37;
                    studentDto.credits = student[0].Column36;


                    return res.status(200).json([{
                        "text": StudentUtil.getTemplateInforStudent(studentDto)
                    }]);
                } else {
                    return res.status(200).json([{
                        "text": StudentException.STUDENT_NOT_FOUND
                    }]);
                }

            } else {
                return res.status(200).json([{
                    "text": CourseException.getExceptionNotFoundCourse(course)
                }]);
            }

        } else {
            return res.status(200).json([{
                "text": StudentException.STUDENT_CODE_ISVALID
            }]);
        }
    }
}
