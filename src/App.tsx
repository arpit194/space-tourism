import {
  // createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import Home from "@/pages/Home";
import Destinations from "@/pages/Destinations";
import Crew from "@/pages/Crew";
import ErrorPage from "@/pages/ErrorPage";
// import ThemeSelector from "@/components/ThemeSelector";
import PageWrapper from "@/components/PageWrapper";

const router = createHashRouter(
  createRoutesFromElements([
    <Route
      path="/"
      element={
        <PageWrapper>
          <Home />
        </PageWrapper>
      }
      errorElement={<ErrorPage />}
    />,
    <Route
      path="/destinations"
      element={
        <PageWrapper>
          <Destinations />
        </PageWrapper>
      }
      errorElement={<ErrorPage />}
    />,
    <Route
      path="/crew"
      element={
        <PageWrapper>
          <Crew />
        </PageWrapper>
      }
      errorElement={<ErrorPage />}
    />,
    <Route
      path="/technology"
      element={
        <PageWrapper>
          <Home />
        </PageWrapper>
      }
      errorElement={<ErrorPage />}
    />,
  ])
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <ThemeSelector /> */}
    </>
  );
}

export default App;
