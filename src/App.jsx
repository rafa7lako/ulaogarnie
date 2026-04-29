import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage.jsx";
import { UnderConstruction } from "./pages/UnderConstruction.jsx";
import { GardenPage } from "./pages/GardenPage.jsx";
import { MemorialPage } from "./pages/MemorialPage.jsx";
import { SeniorPage } from "./pages/SeniorPage.jsx";
import { LayoutMain } from "./pages/Root.jsx";
import { AboutMePage } from "./pages/AboutMePage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { BlogPage } from "./pages/BlogPage.jsx";

const router = createBrowserRouter([
	{
		element: <LayoutMain />, // layout z nav/footer
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "/garden", element: <GardenPage /> },
			{ path: "/memorial", element: <MemorialPage /> },
			{ path: "/senior", element: <SeniorPage /> },
			{ path: "/about", element: <AboutMePage /> },
			{ path: "/contact", element: <ContactPage /> },
			{path: "/blog", element: <BlogPage />}
		],
	},
	{ path: "/", element: <UnderConstruction /> }, 
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
