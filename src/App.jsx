import React, { useState } from "react";
import ListItem from "./ListItem";

function App() {

    const [item, setItem] = useState("");
    const [itemList, setItemList] = useState([]);

    const itemEvent = (event) => {
        setItem(event.target.value);
    }

    const deleteItems = (id) => {

        console.log("helloo ------------- " + id);

        setItemList((prevItems) => {
            return prevItems.filter((elem, index) => {
                return index !== id;
            })
        });

    }

    const listOfItems = () => {
        setItemList((prevItems) => {
            return [...prevItems, item];
        });
        setItem('');
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>Todo List</h1>
                    <br />
                    <input type='text' placeholder="Add a Item" onChange={itemEvent} value={item} />
                    <button onClick={listOfItems}>+</button>

                    <ol>
                        {itemList.map((itemVal, index) => {
                            return <ListItem key={index} id={index} itemVal={itemVal} onSelect={deleteItems} />
                        })}
                    </ol>

                </div>
            </div>
        </>);
}

export default App;