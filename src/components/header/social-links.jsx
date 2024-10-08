import React from "react";
import "./social-links.css";

export const SocialLinks = () => {
	return (
		<div className="social-icons">
			<ul>
				<li>
					<a href="#">
						<i className="fa fa-facebook" aria-hidden="true"></i>
					</a>
				</li>
				<li>
					<a href="#">
						<i className="fa fa-twitter" aria-hidden="true"></i>
					</a>
				</li>
				<li>
					<a href="#">
						<i className="fa fa-dribbble" aria-hidden="true"></i>
					</a>
				</li>
				<li>
					<a href="#">
						<i className="fa fa-behance" aria-hidden="true"></i>
					</a>
				</li>
				<li>
					<a href="#">
						<i className="fa fa-flickr" aria-hidden="true"></i>
					</a>
				</li>
			</ul>
		</div>
	);
};