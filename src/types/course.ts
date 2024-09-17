export interface Courses {
    courseData: null | CoursesList[] | CoursesClientCrudVal;
    setCourseData: (val: null | CoursesList[]) => void;
    crudValue: null | CoursesClientCrudVal;
    setCrudValue: (val: null | CoursesClientCrudVal | CoursesList) => void;
    crudValueDef: CoursesClientCrudVal;
}

export interface CoursesClientCrudVal {
    name: string
    description: string
    fileId: string | number | null
}

export interface CoursesList {
    id: number
    name: string
    description: string
    categoryEnum: string
    active: boolean
    countQuiz: number
    durationTime: number
    fileId: null | number | string
    moduleCount: number
}