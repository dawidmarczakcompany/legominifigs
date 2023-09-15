import HomePage from "pages/HomePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PAGE_ROUTE } from "utils/navigation";
import DrawPage from "pages/DrawPage";
import PurchasePage from "pages/PurchasePage";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "pages/ErrorPage";
import "./index.module.scss";
import SuccessPage from "pages/SuccessPage";

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
          <Route path={PAGE_ROUTE.MINIFIG_SUCCESS} element={<SuccessPage />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
