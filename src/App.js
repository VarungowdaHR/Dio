import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import { Feed, SearchFeed, VideoDetail, ChannelDetail } from "./Pages";
const App=()=>(
    <Router>
        <NavBar />
        <Routes>
            <Route exact path='/' element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:id" element={<SearchFeed />} />
        </Routes>

    </Router>
)

export default App;