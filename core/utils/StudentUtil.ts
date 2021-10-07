import { StudentDTO } from "core/dto/StudentDTO";

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
        return `💳 MSSV: ${student.code}
                📕 Sinh Viên: ${student.name}
                Lớp: ${student.class}
                
                (Hệ 10) 
                Điểm tích lũy: ${student.mark}
                Môn học tích lũy: ${student.subject} Môn học
                Tín chỉ tích lũy: ${student.credits} Tín chỉ

                Kết Quả Được Cập Nhật Lần Cuối Ngày 25/03/2021, Lưu ý chỉ mang tính chất tham khảo`;
    }
}