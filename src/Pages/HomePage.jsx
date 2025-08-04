import MoviesList from "../components/MoviesList";

export default function HomePage() {
    return (
        <>
            <h1>🍿WELCOME TO MY CINEMA📽️</h1>
            <p className="h3 mb-5">
                Here you will find all the trending movies🎟️
            </p>
            <MoviesList />
        </>
    );
}
