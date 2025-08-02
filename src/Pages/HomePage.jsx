export default function HomePage() {
    const moviesApiUrl = import.meta.env.VITE_BACKEND_URL;
    fetch(moviesApiUrl)
        .then((res) => res.json())
        .then((data) => console.log(data));
    return <h1>Hello</h1>;
}
