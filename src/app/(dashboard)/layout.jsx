import SidebarComponent from "@/components/SidebarComponent";
import NavbarComponent from "@/components/NavbarComponent";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className="font-SFProDisplay">
        <main className="h-full flex">
            <div className="w-[20%]">
                <SidebarComponent/>

            </div>
            <div className="w-[80%] ml-5">
                <NavbarComponent/>
                {children}
            </div>
        </main>
        </body>
        </html>
    );
}