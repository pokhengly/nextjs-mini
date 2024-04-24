import SidebarComponent from "@/components/SidebarComponent";
import NavbarComponent from "@/components/NavbarComponent";
import TodoCardComponent from "@/components/TodoCardComponent";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className="font-SFProDisplay">
            <main className="w-full flex mt-5">
                <div className="w-[18%]">
                    <SidebarComponent/>
                </div>
                <div className="w-full ml-10">
                    <NavbarComponent/>
                    <TodoCardComponent/>
                </div>
            </main>

        {children}
        </body>
        </html>
    );
}