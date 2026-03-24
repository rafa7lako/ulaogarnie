import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import "./App.css";
import { HomePage } from './pages/HomePage.jsx';
import { UnderConstruction } from './pages/UnderConstruction.jsx';
import { GardenPage } from './pages/GardenPage.jsx';
import { MemorialPage } from './pages/MemorialPage.jsx';
import { SeniorPage } from './pages/SeniorPage.jsx';

const router = createBrowserRouter([
	{path:'/', element: <UnderConstruction/> },
	{path:'/home', element: <HomePage/> },
	{path: '/garden', element: <GardenPage />},
	{path: '/memorial', element: <MemorialPage />},
	{path: '/senior', element: <SeniorPage />},
])

function App() {
	return (
		<RouterProvider router={router} />
	);
}

export default App;
