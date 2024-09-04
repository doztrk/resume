import React from "react";
import { SectionHeader } from "../section-header";
import testimonials from "../../../data/testimonals.json";
import { Testimonial } from "./testimonial";

export const Testimonials = () => {
	return (
		<section id="testimonials" className="testimonials">
			<SectionHeader title="Testimonials" />
			<div className="testimonial-carousel">
				{testimonials.map((item) => (
					<Testimonial key={item.id} {...item} />
				))}
			</div>
		</section>
	);
};
