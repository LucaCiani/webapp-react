import { useEffect, useState } from "react";

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const moviesApiUrl = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        fetch(moviesApiUrl)
            .then((res) => res.json())
            .then((data) => setMovies(data));
    }, []);

    console.log(movies);

    return <h1>Hello</h1>;
}
