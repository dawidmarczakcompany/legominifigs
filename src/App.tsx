import Home from "pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./index.module.scss";
import { PAGE_ROUTE } from "utils/navigation";
import Draw from "pages/Draw";

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/${PAGE_ROUTE.MINIFIG_SELECTION}`} element={<Draw />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
