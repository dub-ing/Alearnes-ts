import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Signup from "./pages/Signup";
import WelcomePage from "./pages/WelcomePage";
import AppLayout from "./ui/AppLayout";
import Profiles from "./pages/Profiles";
import ProtectedRoute from "./ui/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index path="dashboard" element={<Dashboard />} />
            <Route path="profiles" element={<Profiles />} />
          </Route>
          <Route path="home" element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />
          <Route path="resetpassword" element={<ResetPassword />} />
          <Route path="welcome" element={<WelcomePage />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={10}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "400px",
            padding: "10px 15px",
            backgroundColor: "white",
            color: "black",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
