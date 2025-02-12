import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { About } from './pages/About.page';
import { Project } from "./pages/Project.page"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<HomePage/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="project/:id" element={<Project/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);
