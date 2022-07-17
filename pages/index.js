import Head from "next/head";
import Header from "../components/utils/Header";
import Link from "next/link";

export default function Home() {
	return (
		<body>
			<Header />
			<div class="main">
				<Link href="/watchVideo">
					<a>ビデオ視聴</a>
				</Link>
			</div>
		</body>
	);
}
