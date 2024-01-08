import Hero from "@/components/Hero";
import reliabilityImg from '/public/reliability.jpg'

export default function ReliabilityPage() {
	return (
		<>
			<Hero
			imgSrc={reliabilityImg}
			imgAlt="Welding"
			title="99.9% reliability in our hosting"
			/>
		</>
	);
}
