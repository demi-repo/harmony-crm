import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";

const RoutesDefined = () => {
  return (
    <Router>
      <PageLayout>
        <Suspense fallback={<></>}>
          <Routes></Routes>
        </Suspense>
      </PageLayout>
    </Router>
  );
};

export default RoutesDefined;
