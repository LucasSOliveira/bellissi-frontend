type RouteParameters = { pathname: string; title: string };
type Routes = Array<RouteParameters>;

const routes: Routes = [
  { pathname: "/menu", title: "Cardápio" },
  { pathname: "/categories", title: "Categorias" },
  { pathname: "/blog", title: "Blog" },
];

export default routes;
