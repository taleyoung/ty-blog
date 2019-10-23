import Home from "../pages/app/overview";
import Article from "../pages/app/article";
import About from "../pages/app/about";
import NotFound from "../pages/app/notFound";

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
