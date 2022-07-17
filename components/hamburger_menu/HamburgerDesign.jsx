import hamburger_design_style from "../../styles/hamburger_menu/hamburger_design.module.css";

export default function HamburgerDesign(props) {
	return (
		<button class={hamburger_design_style.hamburger} onClick={props.onClick}>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
}
