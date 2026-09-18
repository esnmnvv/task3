import { createBrowserRouter } from "react-router";
import { Layout } from "./layout";
import { Home } from "../pages/Home.jsx";
import { About } from "../pages/about.jsx";
import { NotFound } from "../pages/not-found";
import { characterService } from "../api/character-service.js";
import { Detail } from "../pages/detail.jsx";
import { LocationList } from "../pages/LocationList.jsx";
import { locationService } from "../api/location-service.js";
import { DetailLocation } from "../pages/DetailLocation.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
          const res = await characterService.getAll();
          return { data: res.results };
        },
      },
      {
        path: "character/:characterId",
        Component: Detail,
        loader: async ({ params }) => {
          const { characterId } = params;
          if (!characterId) {
            throw new Error("characterId is required");
          }
          const res = await characterService.getDetail(characterId);
          return { data: res };
        },
      },
      {
        path: "locations",
        Component: LocationList,
        loader: async () => {
          const res = await locationService.getAll();
          return { data: res.results };
        },
      },
      {
        path: "locations/:locationId",
        Component: DetailLocation,
        loader: async ({ params }) => {
          const { locationId } = params;
          if (!locationId) {
            throw new Error("locationId is required");
          }
          const res = await locationService.getDetail(locationId);
          return { data: res };
        },
      },
      { path: "about", Component: About },
      { path: "*", Component: NotFound },
    ],
  },
]);
