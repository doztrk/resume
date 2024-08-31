import React from "react";
import { SectionHeader } from "../section-header";
import { Intro } from "./intro";
import { Skills } from "./skills";

export const About = () => {
	return (
		<section id="about" className="about">
			<SectionHeader title="About Me" />
			<Intro />
			<Skills />
		</section>
	);
};
