import Card from "../components/ui/card";

const products = [
	{
		key: 1,
		title: "E-Book: Panduan Next.js untuk Pemula",
		description: "Pelajari Next.js dari dasar hingga mahir dengan e-book lengkap ini.",
		imageSrc: "/images/maxgpt.png",
		link: "#",
	},
	{
		key: 2,
		title: "Template Portfolio Developer",
		description: "Template website portfolio modern dan responsif untuk developer.",
		imageSrc: "/images/portofolio.png",
		link: "#",
	},
	{
		key: 3,
		title: "Plugin ChatGPT untuk VSCode",
		description: "Tingkatkan produktivitas coding Anda dengan plugin ChatGPT.",
		imageSrc: "/images/maxfoto.png",
		link: "#",
	},
];

export default function ProductPage() {
	return (
		<div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center mt-7 mb-[80px] w-full sm:w-10/12 px-2">
			{products.map((product) => (
				<Card
					key={product.key}
					title={product.title}
					description={product.description}
					imageSrc={product.imageSrc}
					link={product.link}
				/>
			))}
		</div>
	);
}
