import Hero from "@/components/Hero";
import scaleImg from '/public/scale.jpg'

export default function HomaPage() {
	return (
		<>
			<Hero
			imgSrc={scaleImg}
			imgAlt="Foundry"
			title="Scale your app however you need"
			/>
		</>
	);
}
