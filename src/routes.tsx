import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  // * matches all URLs, the ? makes it optional so it will match / as well
  layout("./pages/Main.tsx", [
    index("./pages/About.tsx"),
    route("resume", "./pages/Resume.tsx"),
    route("portfolio", "./pages/Portfolio.tsx"),
    route("blog", "./pages/Blog.tsx"),
    route("contact", "./pages/Contact.tsx"),
  ]),
] satisfies RouteConfig;
