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
            <PageTitle title="Login"/>
            <Login/>
        </>
    },

    // ======================QUIZ ROUTE==================
    {
        path: '/quiz/dashboard',
        element: <>
            <PageTitle title="Admin | Dashboard"/>
            <Dashboard/>
        </>
    },
    {
        path: '/quiz/category',
        element: <>
            <PageTitle title="Admin | Dashboard"/>
            <Dashboard/>
        </>
    },
    {
        path: '/quiz/test',
        element: <>
            <PageTitle title="Admin | Dashboard"/>
            <Dashboard/>
        </>
    },
    {
        path: '/quiz/users',
        element: <>
            <PageTitle title="Admin | Dashboard"/>
            <Dashboard/>
        </>
    },

    // ====================ONLINE ROUTE==================
    {
        path: '/online/dashboard',
        element: <>
            <PageTitle title="Admin | Dashboard"/>
            <Dashboard/>
        </>
    },

    // =====================EDU ROUTE==================
    {
        path: '/edu/dashboard',
        element: <>
            <PageTitle title="Admin | Dashboard"/>
            <Dashboard/>
        </>
    },
]