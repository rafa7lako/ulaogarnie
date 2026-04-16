import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation.jsx";
import { Footer } from "../components/Footer.jsx";
import { TopStripe } from "../components/TopStripe.jsx";
import { ScrollToTop } from "../components/helper/ScrollToTop.jsx";

export const LayoutMain = () => {
	return (
		<>
			<ScrollToTop />
			<div className="container ">
				<TopStripe />
			</div>
			<div className="container navContainer">
				<Navigation />
			</div>
			<Outlet /> {/* Tu są renderowane podstrony */}
			<Footer />
		</>
	);
};
