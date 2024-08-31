import React from "react";
import "./header.css";
import { MobileMenu } from "./mobile-menu";
import { Avatar } from "./avatar";

export const Header = () => {
	return (
		<header className="header pull-left">
			<MobileMenu />
			<Avatar />
		</header>
	);
};
