import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import item from '../fake-database/db.json';
import useData from "../Hook/useData";

const Create = () => {
    const { data, addData } = useData(item.Users[0].list);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate()


    const handelSubmit = (e) => {
        e.preventDefault()
        let newid = Math.max(...data.map(i =>i.id))
        console.log(newid);
        const list = { title, body, id: newid + 1 };
        addData(list)
        navigate('/home')

    }


    return (
        <div className="create">
            <h2>Add a New item</h2>
            <form onSubmit={handelSubmit}>
                <label>title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <button>Add item</button>
            </form>
        </div>
    );
}

export default Create;
