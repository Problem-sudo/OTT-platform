import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Netflix from "./pages/Netflix";
import Signup from "./pages/Signup";
import Player from "./pages/Player";
import MoviePage from "./pages/Movies";
import TVShows from "./pages/TVShows";
import UserLiked from "./pages/UserLiked";
export default function App() {
return (
    //for maintaining single page application Br ensures that that element clicked is opened other things also like redirect and switch is there
<BrowserRouter>
<Routes>
<Route exact path="/login" element={<Login />} />
<Route exact path="/signup" element={<Signup />} />
<Route exact path="/" element={<Netflix />} />
<Route exact path="/player" element={<Player />} />
 <Route exact path="/tv" element={<TVShows />} />
 <Route exact path="/mylist" element={<UserLiked />} />
 <Route exact path="/movies" element={<MoviePage />} />
</Routes>
</BrowserRouter>
);
}