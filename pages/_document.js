import Document, { Html, Head, Main, NextScript } from "next/document";
// 全ページ共通のレイアウトを設定できる。
class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<div id="portal"></div>
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
