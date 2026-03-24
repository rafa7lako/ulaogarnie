import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage.jsx";
import { UnderConstruction } from "./pages/UnderConstruction.jsx";
import { GardenPage } from "./pages/GardenPage.jsx";
import { MemorialPage } from "./pages/MemorialPage.jsx";
import { SeniorPage } from "./pages/SeniorPage.jsx";
import { LayoutMain } from "./pages/Root.jsx";

const router = createBrowserRouter([
	{
		element: <LayoutMain />, // layout z nav/footer
		children: [
			{ path: "/home", element: <HomePage /> },
			{ path: "/garden", element: <GardenPage /> },
			{ path: "/memorial", element: <MemorialPage /> },
			{ path: "/senior", element: <SeniorPage /> },
		],
	},
	{ path: "/", element: <UnderConstruction /> }, // bez nav/footer
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
