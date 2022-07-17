import WatchVideo from "../components/watch_video/WatchVideoMain";
import Header from "../components/utils/Header";
import axios from "axios";

export default function watchVideo() {
	return (
		<body>
			<Header />
			<WatchVideo />
		</body>
	);
}

const options = {
	url: "http://localhost:3000/api/watchVideo",
	method: "GET",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json;charset=UTF-8",
	},
};

export async function getServerSideProps() {
	// export async function getStaticProps() {
	const response = await axios(options);
	// .then((response) => {
	console.log(response.status);
	console.log(response.data);
	return {
		props: {
			movies: response.data,
		},
	};
}

// }

// downloadStream.on("data", (chunk) => {
// 	res.write(chunk);
// });

// downloadStream.on("error", () => {
// 	res.sendStatus(404);
// });

// downloadStream.on("end", () => {
// 	res.end();
// });
