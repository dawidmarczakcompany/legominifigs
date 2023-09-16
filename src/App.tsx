import HomePage from "pages/HomePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PAGE_ROUTE } from "utils/navigation";
import DrawPage from "pages/DrawPage";
import PurchasePage from "pages/PurchasePage";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "pages/ErrorPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path={PAGE_ROUTE.MINIFIG_SELECTION} element={<DrawPage />} />
          <Route
            path={`${PAGE_ROUTE.MINIFIG_PURCHASE}/:id`}
            element={<PurchasePage />}
          />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
