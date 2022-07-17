// import React from "react";
import navi_design_style from "../../styles/hamburger_menu/navi_design.module.css";

export default function HamburgerNaviDesign(props) {
	return (
		<div id={props.id} class={navi_design_style.naviBox}>
			<ul class={navi_design_style.navi}>
				<li>
					<a href="">ホーム</a>
				</li>
				<li>
					<a href="">ログイン</a>
				</li>
				<li>
					<a href="">ログアウト</a>
				</li>
			</ul>
		</div>
	);
}
