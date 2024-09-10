import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query';
import App from './App.tsx'
import './index.css'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Router>
            <QueryClientProvider client={queryClient}>
                <App/>
            </QueryClientProvider>
        </Router>
    </StrictMode>
)
