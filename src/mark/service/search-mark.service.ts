import { Injectable } from '@nestjs/common';
import { Faculties } from 'src/faculty/util/faculty.util';
import { Connection } from 'typeorm';

@Injectable()
export class MarkService {

    constructor(private connection: Connection){}

    async getMarkByStudentCode(studentCode: string, course: string, facultyCode: string): Promise<any>{
        switch (facultyCode) {
            case Faculties.FACULTY_OF_MECHANICAL_ENGINEERING:      
                return await this.connection.query(`SELECT * FROM CK${course} WHERE COLUMN2 = ?`, [studentCode]);
            case Faculties.FACULTY_OF_ELECTRICAL_AND_ELECTRONICS:
                return await this.connection.query(`SELECT * FROM DD${course} WHERE COLUMN2 = ?`, [studentCode]);
            case Faculties.FACULTY_OF_ELECTRONICS_AND_TELECOMMUNICATIONS:
                return await this.connection.query(`SELECT * FROM DD${course} WHERE COLUMN2 = ?`, [studentCode]);
            case Faculties.FACULTY_OF_INFORMATION_TECHNOLOGY:
                return await this.connection.query(`SELECT * FROM CNTT${course} WHERE COLUMN2 = ?`, [studentCode]);
            case Faculties.FACULTY_OF_FOOD_TECHNOLOGY:
                return await this.connection.query(`SELECT * FROM TP${course} WHERE COLUMN2 = ?`, [studentCode]);
            case Faculties.FACULTY_OF_BUSINESS_ADMINISTRATION:
                return await this.connection.query(`SELECT * FROM KD${course} WHERE COLUMN2 = ?`, [studentCode]);
            case Faculties.FACULTY_OF_CIVIL_ENGINEERING:
                return await this.connection.query(`SELECT * FROM XD${course} WHERE COLUMN2 = ?`, [studentCode]);
            case Faculties.FACULTY_OF_DESIGN: 
                return await this.connection.query(`SELECT * FROM Des${course} WHERE COLUMN2 = ?`, [studentCode]);
            default:
                return null;
        }
   
    }


}
