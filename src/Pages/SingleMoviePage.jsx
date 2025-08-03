import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SingleMoviePage() {
    const { id } = useParams();

    const navigate = useNavigate();

    const [singleMovie, setSingleMovie] = useState({});

    const moviesApiUrl = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        fetch(moviesApiUrl + id)
            .then((res) => res.json())
            .then((data) => setSingleMovie(data));
    }, []);

    console.log(singleMovie);

    return (
        <div>
            <button
                className="btn btn-dark"
                onClick={() => {
                    navigate(-1);
                }}
            >
                ◀️Previous page
            </button>
        </div>
    );
}
