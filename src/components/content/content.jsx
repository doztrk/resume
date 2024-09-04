import React from "react";
import "./content.css";
import { About } from "./about/about";
import { Experiences } from "./experience/experiences";
import { Educations } from "./education/educations";
import { Testimonials } from "./testimonal/testimonials";
import { ContactForm } from "./contact/contact-form";
import { Contacts } from "./contact/contacts";

export const Content = () => {
	return (
		<div className="main-content pull-right">
			<About />
			<Experiences />
			<Educations />
			<Testimonials />
			<Contacts />
		</div>
	);
};

/* import React from "react";
import "./content.css";
import { About } from "./about/about";

export const Content = () => {
	return (
		<div className="main-content pull-right">
			<About />
		</div>
	);
};

 */
