import { useEffect, useState } from "react";
import { data, useNavigate, useParams } from "react-router-dom";

export default function SingleMoviePage() {
    const { id } = useParams();

    const navigate = useNavigate();

    const [singleMovie, setSingleMovie] = useState({});

    const [movieReviews, setMovieReviews] = useState([]);

    const moviesApiUrl = import.meta.env.VITE_BACKEND_URL;

    const reviewsApiUrl = import.meta.env.VITE_BACKEND_REVIEWS_URL;

    useEffect(() => {
        fetch(moviesApiUrl + id)
            .then((res) => res.json())
            .then((data) =>
                setSingleMovie({
                    ...data,
                    updated_at: data.updated_at.slice(0, 10),
                })
            );
        fetch(reviewsApiUrl + id)
            .then((res) => res.json())
            .then((data) => setMovieReviews(data));
    }, []);

    console.log(singleMovie);

    console.log(movieReviews);

    const renderStars = (vote) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= vote) {
                stars.push(
                    <i key={i} className="fa-solid fa-star text-warning"></i>
                );
            } else {
                stars.push(
                    <i key={i} className="fa-regular fa-star text-warning"></i>
                );
            }
        }
        return stars;
    };

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
            {singleMovie && (
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
                                <h2 className="card-title">
                                    {singleMovie.title}
                                </h2>
                                <p className="h5 mb-5">
                                    DIRECTED BY {singleMovie.director}
                                </p>
                                <p className="card-text">
                                    PLOT: {singleMovie.abstract}
                                </p>
                                <p className="card-text">
                                    GENRE: {singleMovie.genre}
                                </p>
                                <p className="card-text">
                                    RELEASED IN {singleMovie.release_year}
                                </p>
                                <small className="card-text">
                                    Last updated {singleMovie.updated_at}
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="row g-3">
                {movieReviews &&
                    movieReviews.map((review) => {
                        return (
                            <div key={review.id} className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <h6 className="card-title">
                                            {review.name}
                                        </h6>
                                        <p>{renderStars(review.vote)}</p>
                                        <p>{review.text}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
