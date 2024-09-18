// Expandable Cards => notification variant cart ||| Floating Dock => dock ga xam variant

export const baseURL: string = 'http://142.93.106.195:8080/'

// =============LOGIN=============
export const authLogin: string = `${baseURL}auth/login`

// =============STATISTIC DASHBOARD==============
export const siteRoleCardSts: string = `${baseURL}statistic/site-dashboard`
export const eduAdminSts: string = `${baseURL}statistic`
export const eduAdminTopGroup: string = `${baseURL}statistic/top/group`
export const eduAdminTopTeacher: string = `${baseURL}statistic/top/Teacher`
export const eduAdminTopStudent: string = `${baseURL}statistic/top/Student`
export const eduAdminCategoryStsYear: string = `${baseURL}statistic/categoryYearly`
export const eduAdminCategoryStsPercentage: string = `${baseURL}statistic/categoryPercentage`
export const quizAdminSts: string = `${baseURL}statistic/countAll-quiz`
export const quizAdminWeeklySts: string = `${baseURL}statistic/weekly-statistic`
export const quizAdminPercentageSts: string = `${baseURL}statistic/percentage-resultStatus`
export const onlineAdminSts: string = `${baseURL}statistic/getOnlineCount`

//================IMG CONTROLLER======================
export const imgUploadPost: string = `${baseURL}file/upload`;
export const imgUpdate: string = `${baseURL}file/update/`;
export const imgGet: string = `${baseURL}file/files/`;
export const imgDelete: string = `${baseURL}file/delete/`;

// ==================USERS====================
export const quizAdminUsers: string = `${baseURL}user/searchUser?page=0&size=10`

//================CATEGORY CONTROLLER==================
export const categoryList: string = `${baseURL}category/list?categoryEnum=`
export const categoryAdd: string = `${baseURL}category/save/category?categoryEnum=`
export const categoryUpdate: string = `${baseURL}category/update/`
export const categoryDelete: string = `${baseURL}category/delete/`
export const categoryGetOne: string = `${baseURL}category/get-one/`

// ==============QUESTION CONTROLLER====================
export const questionAllGetPage: string = `${baseURL}question/filter`
export const questionCrud: string = `${baseURL}question`
