import connectToDatabase from "../../../models/mongodbConnecter";
import { GridFSBucket } from "mongodb";

export default async function hander(req, res) {
	const { db } = await connectToDatabase();
	console.log("connect");

	// const movies = await db;
	const { method } = req;

	switch (method) {
		case "GET":
			try {
				let bucket = new GridFSBucket(db, {
					bucketName: "movie",
				});

				res.status(200).json({ sucess: true });

				bucket
					.openDownloadStreamByName(
						"【雑談】プログラミングスクールについて.mp4"
					)
					.pipe(res);
			} catch (error) {
				console.log(error);
				res.status(400).json({ sucess: false });
			}
			break;

		default:
			res.status(400).json({ sucess: false });
			break;
	}
}
