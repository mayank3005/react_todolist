import React from "react";

const ListItem = (props) => {

    return (
        <>
            <div className="todo_style">
                <i className="fa fa-times" aria-hidden='true' onClick={() => {
                    props.onSelect(props.id);
                }} />
                <li>{props.itemVal}</li>
            </div>
        </>
    );
}

export default ListItem;