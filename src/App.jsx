import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./Layouts/DefaultLayout"
import HomePage from "./Pages/HomePage"
import SingleMoviePage from "./Pages/SingleMoviePage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage}/>
            <Route path="/:id" Component={SingleMoviePage}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
