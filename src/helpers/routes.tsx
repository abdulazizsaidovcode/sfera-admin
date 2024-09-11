import PageTitle from "@/components/custom/Header/PageTitle.tsx";
import {Dashboard, Login, SiteRole} from "@/pages";

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
            <PageTitle title="Quiz | Category"/>
            <Dashboard/>
        </>
    },
    {
        path: '/quiz/test',
        element: <>
            <PageTitle title="Quiz | Test"/>
            <Dashboard/>
        </>
    },
    {
        path: '/quiz/users',
        element: <>
            <PageTitle title="Quiz | Users"/>
            <Dashboard/>
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
            <Dashboard/>
        </>
    },
    {
        path: '/edu/group',
        element: <>
            <PageTitle title="Edu | Groups"/>
            <Dashboard/>
        </>
    },
    {
        path: '/edu/notification',
        element: <>
            <PageTitle title="Edu | Notification"/>
            <Dashboard/>
        </>
    },
    {
        path: '/edu/course',
        element: <>
            <PageTitle title="Edu | Courses"/>
            <Dashboard/>
        </>
    },
]