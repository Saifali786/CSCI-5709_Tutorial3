import { Routes, Route } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import { Registration } from "./Registration";
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};
export default App;
