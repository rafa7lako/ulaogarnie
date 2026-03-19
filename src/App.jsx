import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import "./App.css";
import { HomePage } from './pages/HomePage.jsx';
import { UnderConstruction } from './pages/UnderConstruction.jsx';
import { GardenPage } from './pages/GardenPage.jsx';

const router = createBrowserRouter([
	{path:'/', element: <UnderConstruction/> },
	{path:'/home', element: <HomePage/> },
	{path: '/garden', element: <GardenPage />}
])

function App() {
	return (
		<RouterProvider router={router} />
		// <>
		// 	<div className="container">
		// 		<div className="topStripe"></div>
		// 		<Navigation/>
		// 	</div>
		// 	<Header/>
		// 	<main>
		// 		<SectionOne />
		// 		<SectionTwo />
		// 	</main>
		// 	<Footer/>
		// </>
	);
}

export default App;
