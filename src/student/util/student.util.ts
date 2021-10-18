import { StudentDTO } from "../dto/student.dto";


export class StudentUtil{
    static validateStudentCode(studentCode: string): boolean{
        if(studentCode.length<10 || studentCode.length>10){
            return false;
        }else{
            var studentCodeUpercase = studentCode.toUpperCase();

            studentCodeUpercase = studentCodeUpercase.slice(0,2);

            if(studentCodeUpercase !="DH"){
                return false;
            }
        }

        return true;
    }

    static getTemplateInforStudent(student: StudentDTO): string {
        return `💳 MSSV: ${student.code}\n📕 Sinh Viên: ${student.name}\nLớp: ${student.class}\n \n(Hệ 10)\nĐiểm tích lũy: ${student.mark}\nMôn học tích lũy: ${student.subject} Môn học\nTín chỉ tích lũy: ${student.credits} Tín chỉ\nKết Quả Được Cập Nhật Lần Cuối Ngày 25/03/2021, Lưu ý chỉ mang tính chất tham khảo`;
    }
}