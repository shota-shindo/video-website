import { MongoClient, Db } from "mongodb";

const DBURL = "mongodb://localhost:27017";
const DBNAME = "videosDB";

let cachedClient: MongoClient;
let cachedDb: Db;

if (!DBURL) {
	throw new Error(
		"Please define the MONGODB_URI environment variable inside .env.local"
	);
}

if (!DBNAME) {
	throw new Error(
		"Please define the MONGODB_DB environment variable inside .env.local"
	);
}

async function connectToDatabase() {
	if (cachedClient && cachedDb) {
		//キャッシュ変数が入力されているか確認
		return { client: cachedClient, db: cachedDb };
	}

	const client = await MongoClient.connect(DBURL!);

	const db = await client.db(DBNAME);

	cachedClient = client;
	cachedDb = db;

	return { client, db };
}

export default connectToDatabase;
