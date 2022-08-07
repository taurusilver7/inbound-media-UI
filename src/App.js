import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

const App = () => {
  const user = useSelector((state) => state.authReducer.authData);
  const appUser = user?.user;
  // console.log(appUser);
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>

      <Routes>
        <Route
          path="/"
          element={appUser ? <Navigate to="home" /> : <Navigate to="auth" />}
        />

        <Route
          path="/home"
          element={appUser ? <Home /> : <Navigate to="../auth" />}
        />

        <Route
          path="/auth"
          element={appUser ? <Navigate to="../home" /> : <Auth />}
        />

        <Route
          path="/profile/:id"
          element={appUser ? <Profile /> : <Navigate to="../auth" />}
        />
      </Routes>
    </div>
  );
};

export default App;
