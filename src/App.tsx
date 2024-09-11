import {Route, Routes} from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'
import {routes} from "@/helpers/routes.tsx";

// local admin roles
// ADMIN_EDU, ADMIN_QUIZ, ADMIN_ONLINE

function App() {
    return (
        <DefaultLayout>
            <Routes>
                {routes.map(route => (
                    <Route
                        index={route.path === '/auth/login'}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </DefaultLayout>
    )
}

export default App
