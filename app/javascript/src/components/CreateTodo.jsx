import React from 'react';
import {todoStore} from "../todoStore";

export const CreateTodo = ({ onCreate }) => {
    const [ text, setText ] = React.useState("");

    const handleChange = React.useCallback(e => {
        setText(e.target.value);
    }, []);

    const handleCreate = React.useCallback(e => {
        e.preventDefault();

        // validate that the todo text is not empty

        if (!text || !text.length) throw new Error('Empty todo text');

        // add todo to todoStore

        todoStore.addTodo(text);

        // reset todo text

        setText("");
    }, [onCreate, setText, text]);

    return(
        <form className="box" onSubmit={handleCreate}>
            <div className="field has-addons">
                <div className="control is-expanded">
                    <input className="input is-rounded" placeholder="What needs to be done?" value={text} onChange={handleChange} />
                </div>
                <div className="control">
                    <button className="button is-info" disabled={!text.length}>Add</button>
                </div>
            </div>
        </form>
    )
}