import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LandingPage from "./pages/landingpage";
import AppLayout from "./layouts/app-layout";
import { ThemeProvider } from "./components/theme-provider";

import "./App.css";
import Onboarding from "./pages/onboarding";
import ProtectedRoute from "./components/protected-route";
import PostJob from "./pages/post-job";
import JobListing from "./pages/jobListing";
import MyJobs from "./pages/my-jobs";
import SavedJobs from "./pages/saved-jobs";
import JobPage from "./pages/job";

const router = createBrowserRouter([
  {
  
    element: <AppLayout />,
   
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
          <LandingPage />
       </ProtectedRoute>
        )
       
      },
      {
        path: "/onboarding",
        element: (
         
          <ProtectedRoute>
           <Onboarding/>
          </ProtectedRoute>
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
           <JobListing/>
          </ProtectedRoute>
        ),
      },
      {
        path: "/post-job",
        element: (
          <ProtectedRoute>
           <PostJob/>
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <ProtectedRoute>
           <MyJobs/>
          </ProtectedRoute>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <ProtectedRoute>
           <SavedJobs/>
          </ProtectedRoute>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRoute>
           <JobPage/>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
