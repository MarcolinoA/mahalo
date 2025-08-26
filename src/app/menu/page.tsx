import WorkInProgress from "@/components/shared/work-in-progress";
import DesktopNavbar from "@/components/shared/navbar/desktop-navbar";

export default function MenuPage() {
	return (
		<main className="min-h-screen bg-sidebar">
			<DesktopNavbar />
			<WorkInProgress/>
		</main>
	);
}