import Dashboard from "../../pages/Dashboard";
import Header from "./Header";
import Sidemenu from "./Sidemenu";

const Layout = ({children}: React.PropsWithChildren) => {
    return (
        <div className="flex h-screen">
            <Sidemenu />
            <div className="flex-1 flex flex-col">
                <Header />
                <main className="flex-1 overflow-auto bg-gray-50">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default Layout;