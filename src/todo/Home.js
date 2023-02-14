import TodoList from "./TodoList";
import useData from "../Hook/useData";
import item from '../fake-database/db.json'
const Home = () => {
  const { data, updateData } = useData(item.Users[0].list)
  return (
    <div className="home">
      <TodoList item={data}
        update={updateData} />
    </div>
  );
}

export default Home;
