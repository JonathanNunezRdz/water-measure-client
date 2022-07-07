/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
	title: "water-measure",
	titleTemplate: "%s | nextarter-chakra",
	defaultTitle: "water-measure",
	description: "Water measure client - real time cistern water level",
	canonical: "http://localhost:3000",
	openGraph: {
		url: "http://localhost:300",
		title: "water-measure",
		description: "Water measure client - real time cistern water level",
		images: [
			{
				url: "https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
				alt: "nextarter-chakra.sznm.dev og-image",
			},
		],
		site_name: "water-measure",
	},
	twitter: {
		handle: "@NunezRdz",
		cardType: "summary_large_image",
	},
};

export default defaultSEOConfig;
