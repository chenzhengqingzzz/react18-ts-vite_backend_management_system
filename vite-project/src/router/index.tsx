import Home from '@/views/Home';
import About from '@/views/About'
import { Navigate } from 'react-router-dom';
const routes = [
    {
        path: '/',
        element: <Navigate to='/home' /> // 使用重定向组件 重定向到Home
    },

    {
        path: '/home',
        element: <Home />
    },

    {
        path: 'about',
        element: <About />
    }
]

export default routes