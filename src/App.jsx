import ulaogarnieLogo from "./assets/ulaogarnieLogo.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
	return (
		<>
			<div className="container">
				<div className="topStripe"></div>
				<nav className="navigation">
					<div className="navElement">
						<a>pielęgnacja ogrodu</a>
						<a>opieka nad miejscami pamięci</a>
						<a>pomoc seniorom</a>
					</div>
					<div className="navElementLogo">
						<img src={ulaogarnieLogo} alt="logo ulaogarnia.pl" />
					</div>
					<div className="navElement">
						<a>o nas</a>
						<a>cennik</a>
						<a>kontakt</a>
					</div>
				</nav>
			</div>
			<header>
				<div className="hero">
					<h1 className="headerOne">
						Potrzebujesz pomocy? <br />{" "}
						<span style={{ color: "#F7CB6C" }}>Ula ogarnie.</span>
					</h1>
					<p>Kompleksowa pomoc w ogrodzie, przy miejscach pamięci i w domu.</p>
					<a className="buttonCta" href="#">
						kontakt
					</a>
				</div>
			</header>
			<main>
				<section>
					<div className="flexRow">
            <div className='fadeLine fadeLineLeft'></div>
						<h2 className="headingTwo">Usługi</h2>
            <div className='fadeLine fadeLineRight'></div>
					</div>
          <div className="cardsServices">
            <div className="card">
              <a href="#"></a>
            </div>
          </div>
				</section>
			</main>
		</>
	);
}

export default App;
