import Card from "../components/ui/card";
import { MotionDiv } from "../components/motion-wrapper";

const products = [
	{ 
		key: 0,
		title: "Panduan Pembelajaran Koding dan AI",
		description: "Buku ini adalah kunci membuka dunia koding dan AI dengan cara yang sederhana, menyenangkan, dan aplikatif — dirancang khusus untuk pendidikan dasar.",
		imageSrc: "/images/pembelajaran_koding.png",
		link: "https://s.id/OikdA",
	},

	{
		key: 1,
		title: "Advanced Prompt Pembelajaran AI menggunakan ChatGPT",
		description: "Koleksi prompt siap pakai yang dirancang khusus untuk mendampingi guru dalam memanfaatkan AI di kelas!",
		imageSrc: "/images/test.jpg",
		link: "https://lynk.id/noviann/gwvgww5lnwd1",
	},
	{
		key: 2,
		title: "[GPTs] GuruSoalAI - AI Buat Bikin Soal Otomatis by Novian",
		description: "GuruSoalAI adalah GPT custom siap pakai yang dirancang khusus buat bantu kamu bikin soal dari materi pelajaran. ",
		imageSrc: "/images/guru_soal.png",
		link: "https://lynk.id/noviann/xdxj6zv0weqk",
	},
	{
		key: 3,
		title: "Mengenal Pembelajaran Menggunakan AI",
		description: "Panduan komprehensif dan inspiratif yang membahas bagaimana AI dapat dimanfaatkan ",
		imageSrc: "/images/pembelajaran_ai.jpeg",
		link: "https://lynk.id/noviann/yxqj6n84yn3r",
	},
	{
		key: 4,
		title: "AI for Education: Komunitas AI untuk Pendidik di Indonesia 🇮🇩",
		description: "Komunitas AI para pendidik yang ingin belajar dan berbagi tentang pemanfaatan AI.",
		imageSrc: "/images/aie.png",
		link: "https://lynk.id/noviann/o68q4oqq4pre",
	}
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

export default function ProductPage() {
	return (
		<MotionDiv
			className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center mt-7 mb-[80px] w-full sm:w-10/12 px-2"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			{products.map((product) => (
				<MotionDiv key={product.key} variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
					<Card key={product.key} title={product.title} description={product.description} imageSrc={product.imageSrc} link={product.link} />
				</MotionDiv>
			))}
		</MotionDiv>
	);
}
