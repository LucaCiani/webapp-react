import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";

export default function DefaultLayout() {
    return (
        <>
            <HeaderComponent />
            <main className="my-4">
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </>
    );
}
