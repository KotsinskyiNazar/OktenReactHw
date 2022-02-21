import logo from './logo.svg';
import './App.css';
import User from "./Components/user_list/user/User";
import Users from "./Components/user_list/Users/Users";
import Posts from "./Components/Post_list/Posts/Posts";
import Comments from "./Components/Comment_list/Comments/Comments";


function App() {
  return (
    <div className="App">
      <h1></h1>
        <div className={'userList'}>
            <Users/>
        </div>
        <div className={'postList'}>
            <Posts/>
        </div>
        <div className={'commentList'}>
            <Comments/>
        </div>

    </div>
  );
}

export default App;
