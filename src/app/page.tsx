import Hero from "@/components/Hero";
import homeImg from '/public/home.jpg'

export default function HomaPage() {
	return (
		<>
			<Hero
			imgSrc={homeImg}
			imgAlt="Car Factory"
			title="Professional Cloud Hosting"
			/>
		</>
	);
}
