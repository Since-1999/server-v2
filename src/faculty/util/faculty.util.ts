
export enum Faculties {
    FACULTY_OF_INFORMATION_TECHNOLOGY = "5", // cntt
    FACULTY_OF_CIVIL_ENGINEERING = "8",//xd
    FACULTY_OF_FOOD_TECHNOLOGY = "6",//cntp
    FACULTY_OF_ELECTRICAL_AND_ELECTRONICS = "3",//điện điện tử
    FACULTY_OF_ELECTRONICS_AND_TELECOMMUNICATIONS = "4",//viễn thông
    FACULTY_OF_MECHANICAL_ENGINEERING = "1",// ck
    FACULTY_OF_BUSINESS_ADMINISTRATION = "7",//quantri
    FACULTY_OF_DESIGN = "9"//tk
};

export class FacultyUtil{
    
    static getFacultyCode(studentCode: string): string{
        if(studentCode.length<10 || studentCode.length>10){
            return "NALL";
        }else{
            let facultyCode: string = studentCode.toUpperCase();

            facultyCode = facultyCode.slice(2,3);

            return facultyCode;
        }
    }
}