import { Module } from '@nestjs/common';
import { FacultyUtil } from './util/faculty.util';

@Module({
    imports:[FacultyUtil],
    exports:[FacultyUtil]
})
export class FacultyModule {}
