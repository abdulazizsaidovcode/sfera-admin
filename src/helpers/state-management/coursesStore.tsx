import {create} from 'zustand';
import {Courses, CoursesClientCrudVal, CoursesList} from "@/types/course.ts";

const courseStore = create<Courses>((set) => ({
    courseData: null,
    setCourseData: (val: null | CoursesList[]) => set({courseData: val}),
    crudValueDef: {
        name: '',
        description: '',
        fileId: null
    },
    crudValue: {
        name: '',
        description: '',
        fileId: null
    },
    setCrudValue: (val: null | CoursesList | CoursesClientCrudVal) => set({crudValue: val}),
}));

export default courseStore;