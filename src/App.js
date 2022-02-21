import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";


import {PostsPage, CarPage, CommentsPage, UsersPage} from "./Pages";
import {Layout} from "./Components";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={"/cars"} element={<CarPage/>}/>
                    <Route path={"/users"} element={<UsersPage/>}/>
                    <Route path={"/posts"} element={<PostsPage/>}/>
                    <Route path={"/comments"} element={<CommentsPage/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
