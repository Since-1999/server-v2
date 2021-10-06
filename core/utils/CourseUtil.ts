export enum Courses{
    COURSE_17 = "17",
    COURSE_18 = "18",
    COURSE_19 = "19",
    COURSE_20 = "20",
}

export class CourseUtil{
    static getCourse(studentCode: string):string{
        if(studentCode.length<10 || studentCode.length>10){
            return "NALL";
        }else{
            let courseCode:string = studentCode.toUpperCase();
            courseCode = courseCode.slice(3,5);

            return courseCode;
        }
    }
}