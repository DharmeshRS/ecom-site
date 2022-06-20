import './App.css';
import './Components/Category/categories.styles.scss';
import './Directory/Directory.styles.scss'
import Directory from './Directory/Directory';
function App() {
  const categories = [
    {
      id: 1,
      title: "Hats",
      image:"https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGF0c3xlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    {
      id: 2,
      title: "Jackets",
      image:"https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGF0c3xlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    {
      id: 3,
      title: "Sneakers",
      image:"https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGF0c3xlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    {
      id: 4,
      title: "Women",
      image:"https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGF0c3xlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    {
      id: 5,
      title: "Mens",
      image:"https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGF0c3xlbnwwfHwwfHw%3D&w=1000&q=80"
    }
  ]
  return (
      <>
        <Directory categories={categories} />
      </>
  );
}

export default App;
