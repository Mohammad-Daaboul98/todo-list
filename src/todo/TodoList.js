import { useState } from "react";
import Popup from "./Popup";

const TodoList = ({ item, update }) => {
  // const [item, setItem] = useState(lists);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const deleteHndler = (index) => {
    item.splice(index, 1);
    update([...item]);
  };

  const editeHandle = (List) => {
    setSelectedItem(List);
    setShowPopup(true);
  };

  const updateItem = (newTitle, newBody) => {
    const updatedList = [...item];
    const index = item.findIndex(list => list.id === selectedItem.id);
    updatedList[index].title = newTitle;
    updatedList[index].body = newBody;
    update(updatedList);
    setShowPopup(false);
  };


  return (
    <div className="todo-list">
      {item && item.map((List, index) => (
        <div className="todo-preview" key={List.id} >
          <h2>{List.title}</h2>
          <div>{List.body}</div>
          <div className="btn-box">
            <button onClick={() => deleteHndler(index)}>Delete</button>
            <button onClick={() => editeHandle(List)}>Edit</button>
          </div>
        </div>

      ))}
      {showPopup && (
        <Popup
          selectedItem={selectedItem}
          setShowPopup={setShowPopup}
          setSelectedItem={setSelectedItem}
          updateItem={updateItem}
        />
      )}
    </div>
  );
};

export default TodoList
