import DesktopNavbar from "@/components/shared/navbar/desktop-navbar";
import WorkInProgress from "@/components/work-in-progress";

export default function MenuPage() {
	return (
		<main className="min-h-screen bg-sidebar">
			<DesktopNavbar />
			<WorkInProgress />
		</main>
	);
}