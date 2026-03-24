import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation.jsx";
import { Footer } from "../components/Footer.jsx";
import { TopStripe } from "../components/TopStripe.jsx";

export const LayoutMain = () => {
	return (
		<>
			<div className="container ">
				<TopStripe />
				<Navigation />
			</div>
			<Outlet /> {/* Tu będą renderowane podstrony */}
			<Footer />
		</>
	);
};
