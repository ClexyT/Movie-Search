import type { Route } from "./+types/home";
import  Main  from "../Main.jsx" ; 

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Movie Search App" },
    { name: "description", content: "Welcome to your Movie Search!" },
  ];
}

export default function Home() {
  return <Main />;
}
