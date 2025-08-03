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
        <div className="d-flex flex-column">
            <div>
                <button
                    className="btn btn-dark"
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    ◀️ALL MOVIES
                </button>
            </div>
            <div className="card my-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={singleMovie.image}
                            className="img-fluid rounded-start"
                            alt=""
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">{singleMovie.title}</h2>
                            <p className="card-text">
                                PLOT: {singleMovie.abstract}
                            </p>
                            <p className="card-text">
                                GENRE: {singleMovie.genre}
                            </p>
                            <p className="card-text">
                                <small>Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
