import {create} from 'zustand';
import {Attendance} from "@/types/attendance.ts";

const attendanceStore = create<Attendance>((set) => ({
    activeYear: `${new Date().getFullYear()}`,
    setActiveYear: (v: string) => set({activeYear: v})
}));

export default attendanceStore;