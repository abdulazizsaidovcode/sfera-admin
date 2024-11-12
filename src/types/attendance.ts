export interface Attendance {
    activeYear: string
    setActiveYear: (year: string) => void
}

export interface IAttendance {
    attendDtoList: {
        attendance: null | boolean
        date: string
        id: null | number
    }[]
    studentId: number
    studentLastName: string
    studentName: string
}