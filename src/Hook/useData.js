import { useState } from "react";

const useData = (Data) => {
  const [data, setData] = useState(Data);

  const addData = newItem => {
    data.push(newItem)
    setData(data);

  };

  const updateData = updatedItem => {
    const updatedData = data.map(item =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setData(updatedData);
    console.log(data);
  };

  return { data, addData, updateData };
};

export default useData;
