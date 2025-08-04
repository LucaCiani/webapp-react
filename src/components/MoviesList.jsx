import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MoviesList() {
    const [movies, setMovies] = useState([]);
    const moviesApiUrl = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        fetch(moviesApiUrl)
            .then((res) => res.json())
            .then((data) => setMovies(data));
    }, []);

    console.log(movies);

    return (
        <div className="row row-cols-2 row-cols-lg-3 g-5">
            {movies &&
                movies.map((movie) => {
                    return (
                        <div key={movie.id} className="col">
                            <Link
                                to={`${movie.id}`}
                                className="link-underline link-underline-opacity-0"
                            >
                                <div className="card">
                                    <img src={movie.image} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {movie.title}
                                        </h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
        </div>
    );
}
