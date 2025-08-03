import { Link } from "react-router-dom";

export default function HeaderComponent() {
    return (
        <header>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <Link to={"/"}>
                        <img src="/cyan-cinema-logo.png" alt="logo" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
