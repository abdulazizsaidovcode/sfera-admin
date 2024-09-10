import {Route, Routes} from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'
import PageTitle from './components/custom/Header/PageTitle'
import {Dashboard, Login} from "@/pages";

function App() {
    return (
        <DefaultLayout>
            <Routes>
                <Route
                    path={`/admin/dashboard`}
                    element={
                        <>
                            <PageTitle title="Admin | Dashboard"/>
                            <Dashboard/>
                        </>
                    }
                />
                <Route
                    index
                    path={`/auth/login`}
                    element={
                        <>
                            <PageTitle title="Login"/>
                            <Login/>
                        </>
                    }
                />
            </Routes>
        </DefaultLayout>
    )
}

export default App
