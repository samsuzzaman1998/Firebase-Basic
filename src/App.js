import GitHubLogIn from "./Pages/GitHubLogIn";
import GoogleSignIn from "./Pages/GoogleSignIn";

function App() {
    return (
        <div className="App">
            <h2>Firebase Authentication</h2>
            <GoogleSignIn />
            <GitHubLogIn />
        </div>
    );
}

export default App;
