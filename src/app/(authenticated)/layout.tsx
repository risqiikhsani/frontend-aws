import LeftAppBar from "@/components/left-app-bar";
import RightAppBar from "@/components/right-app-bar";

export default function Layout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <div className="flex">
                <LeftAppBar />
                <div className="flex-1 md:mx-64 pt-24 pb-8 px-8">
                    {children}
                </div>
                <RightAppBar />
            </div>
        </>
    )
}