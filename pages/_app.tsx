import PageHead from "@/components/PageHead";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<PageHead />
			<Component {...pageProps} />
		</>
	);
}
