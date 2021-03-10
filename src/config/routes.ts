import Home from "@routes/Home.svelte";
import NotFound from "@routes/NotFound.svelte";
import { wrap } from "svelte-spa-router/wrap";

export default {
  "/": Home,
  "/about": wrap({
    asyncComponent: () => import("@routes/About.svelte"),
  }),
  "*": NotFound,
};
