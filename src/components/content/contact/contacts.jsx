import React from "react";
import { SectionHeader } from "../section-header";
import { ContactForm } from "./contact-form";

export const Contacts = () => {
	return (
		<section id="contact" className="contact">
			<SectionHeader title="Get in Touch" />

			<ContactForm />
		</section>
	);
};
