export class CourseException{
    static getExceptionNotFoundCourse(course: string){
        return `Chưa có dữ liệu khóa D${course}, chúng tôi sẽ cập nhật ngay sau khi có.`
    }
}