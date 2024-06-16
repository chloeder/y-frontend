import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import FollowPage from "./pages/FollowPage";
import ProfilePage from "./pages/ProfilePage";
import MainLayout from "./components/layouts/MainLayouts";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/thread/:id" element={<DetailPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/follow" element={<FollowPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
