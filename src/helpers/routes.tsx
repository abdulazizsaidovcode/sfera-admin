import PageTitle from "@/components/custom/Header/PageTitle.tsx";
import {Courses, Dashboard, Login, SiteRole, Users, Groups, Notifications, Tests, Rate} from "@/pages";

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
        path: '/quiz/category/:id',
        element: <>
            <PageTitle title="Quiz | Courses details"/>
            <Notifications/>
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
    {
        path: '/quiz/notification',
        element: <>
            <PageTitle title="Quiz | Notification"/>
            <Notifications/>
        </>
    },
    {
        path: '/quiz/result',
        element: <>
            <PageTitle title="Quiz | Result"/>
            <Notifications/>
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
        path: '/online/test',
        element: <>
            <PageTitle title="Online platform | Test"/>
            <Tests/>
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
    {
        path: '/online/module',
        element: <>
            <PageTitle title="Online platform | Module"/>
            <Courses/>
        </>
    },

    // =====================EDU ROUTE==================
    {
        path: '/edu/dashboard',
        element: <>
            <PageTitle title="Education | Dashboard"/>
            <Dashboard/>
        </>
    },
    {
        path: '/edu/users',
        element: <>
            <PageTitle title="Education | Users"/>
            <Users/>
        </>
    },
    {
        path: '/edu/group',
        element: <>
            <PageTitle title="Education | Groups"/>
            <Groups/>
        </>
    },
    {
        path: '/edu/notification',
        element: <>
            <PageTitle title="Education | Notification"/>
            <Notifications/>
        </>
    },
    {
        path: '/edu/course',
        element: <>
            <PageTitle title="Education | Courses"/>
            <Courses/>
        </>
    },
    {
        path: '/edu/module',
        element: <>
            <PageTitle title="Education | Module"/>
            <Courses/>
        </>
    },
    {
        path: '/edu/rate',
        element: <>
            <PageTitle title="Education | Rate"/>
            <Rate/>
        </>
    },
]