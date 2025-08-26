import WorkInProgress from "@/components/shared/maintenance-site";
import DesktopNavbar from "@/components/shared/navbar/desktop-navbar";

export default function Page() {
	return (
		<main className="min-h-screen">
			<DesktopNavbar />
			<WorkInProgress/>
		</main>
	);
}