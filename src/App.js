import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";


import {PostPage, UserPage, UserDetailsPage, UserPostsPage, PostDetailsPage, PostCommentPage} from './Pages'
import Layout from "./Components/Layout/Layout";




function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/users'} element={<UserPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={'posts'} element={<UserPostsPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'/posts'} element={<PostPage/>}>
                        <Route path={':id'}element={<PostDetailsPage/>}>
                            <Route path={"comments"}element={<PostCommentPage/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
