/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";

const PageHead = () => {
	return (
		<Head>
			<title>Mo's Real Estate</title>
			{/* Primary Meta Tags */}
			<title>Mo's Real Estate - The best of the best</title>
			<meta
				name="title"
				content="Mo's Real Estate - The best of the best"
			/>
			<meta
				name="description"
				content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
			/>
			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://metatags.io/" />
			<meta
				property="og:title"
				content="Mo's Real Estate - The best of the best"
			/>
			<meta
				property="og:description"
				content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
			/>
			<meta
				property="og:image"
				content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
			/>
			{/* Twitter */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://metatags.io/" />
			<meta
				property="twitter:title"
				content="Mo's Real Estate - The Best of The Best"
			/>
			<meta
				property="twitter:description"
				content="Your go-to site for a real estate hunt!"
			/>
			<meta
				property="twitter:image"
				content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
			/>
		</Head>
	);
};

export default PageHead;
