import { Routes, Route } from "react-router";
import {SomePage} from "@/pages/some-page";
import {NotFoundPage} from "@/pages/not-found";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<SomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};