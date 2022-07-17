// import React from "react";
import $ from "jquery";
import HamburgerDesign from "./HamburgerDesign";
import HamburgerNaviDesign from "./HamburgerNaviDesign";
import navi_design_style from "../../styles/hamburger_menu/navi_design.module.css";

export default function HamburgerMotion() {
	const toggleFunc = () => {
		$("#naviBox").animate({ width: "toggle" });
	};

	return (
		<div>
			<HamburgerNaviDesign id="naviBox" />
			<HamburgerDesign onClick={toggleFunc} />
		</div>
	);
}
