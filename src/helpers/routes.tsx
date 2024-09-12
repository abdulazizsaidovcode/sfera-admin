import PageTitle from "@/components/custom/Header/PageTitle.tsx";
import {Courses, Dashboard, Login, SiteRole, Users, Groups, Notifications, Tests} from "@/pages";

export const routes = [
    // ====================GLOBAL ROUTE===================
    {
        path: '/admin/site-role',
        element: <>
            <PageTitle title="Admin | Site Role"/>
            <SiteRole/>
        </>
    },
    {
        path: '/auth/login',
        element: <>
            <PageTitle title="Admin | Login"/>
            <Login/>
        </>
    },

    // ======================QUIZ ROUTE==================
    {
        path: '/quiz/dashboard',
        element: <>
            <PageTitle title="Quiz | Dashboard"/>
            <Dashboard/>
        </>
    },
    {
        path: '/quiz/category',
        element: <>
            <PageTitle title="Quiz | Courses"/>
            <Courses/>
        </>
    },
    {
        path: '/quiz/test',
        element: <>
            <PageTitle title="Quiz | Test"/>
            <Tests/>
        </>
    },
    {
        path: '/quiz/users',
        element: <>
            <PageTitle title="Quiz | Users"/>
            <Users/>
        </>
    },

    // ====================ONLINE ROUTE==================
    {
        path: '/online/dashboard',
        element: <>
            <PageTitle title="Online platform | Dashboard"/>
            <Dashboard/>
        </>
    },
    {
        path: '/online/users',
        element: <>
            <PageTitle title="Online platform | Users"/>
            <Users/>
        </>
    },
    {
        path: '/online/group',
        element: <>
            <PageTitle title="Online platform | Groups"/>
            <Groups/>
        </>
    },
    {
        path: '/online/notification',
        element: <>
            <PageTitle title="Online platform | Notification"/>
            <Notifications/>
        </>
    },
    {
        path: '/online/course',
        element: <>
            <PageTitle title="Online platform | Courses"/>
            <Courses/>
        </>
    },

    // =====================EDU ROUTE==================
    {
        path: '/edu/dashboard',
        element: <>
            <PageTitle title="Edu | Dashboard"/>
            <Dashboard/>
        </>
    },
    {
        path: '/edu/users',
        element: <>
            <PageTitle title="Edu | Users"/>
            <Users/>
        </>
    },
    {
        path: '/edu/group',
        element: <>
            <PageTitle title="Edu | Groups"/>
            <Groups/>
        </>
    },
    {
        path: '/edu/notification',
        element: <>
            <PageTitle title="Edu | Notification"/>
            <Notifications/>
        </>
    },
    {
        path: '/edu/course',
        element: <>
            <PageTitle title="Edu | Courses"/>
            <Courses/>
        </>
    },
]