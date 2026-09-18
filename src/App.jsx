import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/about";
import { Layout } from "./app/layout";
import { Detail } from "./pages/detail";
import { LocationList } from "./pages/LocationList";
import { DetailLocation } from "./pages/DetailLocation";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="character/:characterId" element={<Detail />} />
            <Route path="locations" element={<LocationList />} />
            <Route path="locations/:locationId" element={<DetailLocation />} />
            <Route path="*" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
