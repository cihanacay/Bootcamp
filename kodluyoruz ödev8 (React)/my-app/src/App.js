import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import UserCard from "./components/UserCard";


export const headerLinks = [
  {
    id: 1,
    title: "Ana Sayfa",
    link: "/",
  },
  {
    id: 2,
    title: "Yazılar",
    link: "/blog",
  },
  {
    id: 3,
    title: "Projeler",
    link: "/projects",
  },
  {
    id: 4,
    title: "Hakkımda",
    link: "/about",
  },
];

function App() {
  return (
    <div>
      <Header links={headerLinks} />
      <main>

        <UserCard/>
        
     </main>

    </div>
  
  
  );
}
export default App;