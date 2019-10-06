import Home from "../pages/home";
import Article from "../pages/article";
import About from "../pages/about";
import NotFound from "../pages/notFound";

let routes = [
  {
    path: "/app",
    component: "",
    subs: [
      {
        path: "/home",
        component: "Home"
      },
      {
        path: "/article",
        component: "Article"
      },
      {
        path: "/about",
        component: "About"
      }
    ]
  }
];
export default routes;
// export default {
//   path: "/",
//   name: "home",
//   //   component: Layout,
//   childRoutes: [
//     { path: "", component: Home },
//     { path: "article/:id", component: Article },
//     { path: "/about", component: About },
//     { path: "*", component: NotFound }
//   ]
// };
