import React from "react";
import { Link } from "react-router-dom";
import cardOneImg from "../assets/../assets/heroAlternative.jpg";
import "./BlogPage.css";

export const BlogPage = () => {
	return (
		<div>
			<div className="blog__container">
				<div className="blogpost__list">
					<div className="blogpost__container">
                        <img src={cardOneImg} alt="" />
                        <div>
                            <h3>Blog Post Heading</h3>
                            <p>Data</p>
                            <p>Text</p>
                            <Link to={'#'}>Czytaj więcej</Link>
                        </div>
                    </div>
					<div className="blogpost__container">Blog Post #2</div>
				</div>
				<div>
					<div className="blogpost__search">
                        <input type="text" />
                    </div>
					<div className="blogpost__recent">
						<div className="blogpost__recentHeading">Ostatnie</div>
						<div className="blogpost__recentList"></div>
					</div>
				</div>
			</div>
		</div>
	);
};
