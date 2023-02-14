import { useState } from "react";

const Popup = (props) => {
    const [input1, setInput1] = useState(props.selectedItem.title);
    const [input2, setInput2] = useState(props.selectedItem.body);

    const handleUpdate = () => {
        props.updateItem(input1, input2);
      };

    const handleCancel = () => {
        props.setShowPopup(false);
    };

    return (
        <div id="popup">
            <div id="popup-content">
                <div id="popup-header">Update</div>
                <div id="popup-body">
                    <input
                        type="text"
                        id="input1"
                        placeholder="Input 1"
                        value={input1}
                        onChange={(e) => setInput1(e.target.value)}
                    />
                    <input
                        type="text"
                        id="input2"
                        placeholder="Input 2"
                        value={input2}
                        onChange={(e) => setInput2(e.target.value)}
                    />
                </div>
                <div id="popup-footer">
                    <button id="update-button" onClick={handleUpdate}>
                        Update
                    </button>
                    <button id="cancel-button" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
