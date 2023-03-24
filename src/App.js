import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
const Main = React.lazy(() => import("./pages/Main"));
export const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
