import Hero from "@/components/Hero";
import performanceImg from '/public/performance.jpg'

export default function PerformancePage() {
	return (
		<>
			<Hero
			imgSrc={performanceImg}
			imgAlt="Welding"
			title="We server high performance apps"
			/>
		</>
	);
}
