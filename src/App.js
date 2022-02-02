import Auth from './Components/auth';
import Dashboard from "./Components/Dashboard";
import { useUserContext } from "./contexts/userContext";
import Signup from './Components/Signup.js';


function App() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="App">
      <Signup></Signup>
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
    </div>
  );
}

export default App;