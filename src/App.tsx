import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import FollowPage from "./pages/FollowPage";
import ProfilePage from "./pages/ProfilePage";
import MainLayout from "./components/layouts/MainLayouts";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./lib/axios";
import { Box, Spinner } from "@chakra-ui/react";

function App() {
  const { data: authUser, isPending } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/auth/check-me");
        return res.data;
      } catch (error) {
        throw new Error("Unauthenticated");
      }
    },
    retry: 1,
  });

  if (isPending)
    return (
      <Box
        h="100vh"
        w="100vw"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="#00000"
      >
        <Spinner
          thickness="5px"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Box>
    );

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={authUser ? <HomePage /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/thread/:id"
            element={authUser ? <DetailPage /> : <Navigate to={"/login"} />}
          />
          {/* <Route
            path="/search"
            element={authUser ? <SearchPage /> : <Navigate to={"/login"} />}
          /> */}
          <Route path="/search" element={<SearchPage />} />
          <Route
            path="/follow"
            element={authUser ? <FollowPage /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/profile"
            element={authUser ? <ProfilePage /> : <Navigate to={"/login"} />}
          />
        </Route>

        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/register"
          element={!authUser ? <RegisterPage /> : <Navigate to={"/"} />}
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
