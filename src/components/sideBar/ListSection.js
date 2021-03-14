import React, { useState, useRef } from 'react';
import {
    updateState,
    removeItemFromList,
} from '/src/helpers/updateState'

import useOutsideClick from "../../helpers/useOutsideClick";

import {
    setItemsToStorage,
    getItemsFromStorage,
} from '/src/helpers/localStorage'


function ListSection(props) {
    const [listItems, setListItems] = useState([]);
    const [addNewItemFormOpen, setAddNewItemFormOpen] = useState(false);

    getItemsFromStorage(props.dataNameForStorage, setListItems, props.listItems);
    setItemsToStorage(props.dataNameForStorage, listItems);

    return (
        <section className="list-section border">
            <h2 className="title">{props.sectionTitle}</h2>
            <ul className="list-section__list">
                {listItems.map((item)=>{
                    return <ListItem editMode={item.editMode} setListItems={setListItems} name={item.name} id={item.id}
                                     key={item.id}/>
                })}
            </ul>
            {renderItemForm(addNewItemFormOpen, setAddNewItemFormOpen, setListItems, props.btnName)}
        </section>)
}


function ListItem(props) {
    // If items edit mode is on, return editing form, else return li element
    if ( props.editMode ) {
        return <EditItemForm setListItems={props.setListItems} id={props.id} name={props.name}/>
    } else {
        return <RenderListItem setListItems={props.setListItems} id={props.id} name={props.name}/>
    }
}

function RenderListItem(props) {
    return (
        <li onClick={()=>updateState(props.setListItems, props.id, {name: props.name, editMode: true, id: props.id})}
            className="list-section__item pointer row">
            {props.name}
            <span className="material-icons list-section__settings list-btn">settings</span>
        </li>
    )
}

function EditItemForm(props) {
    const [editingItem, setEditingItem] = useState(props.name);
    const ref = useRef();

    function handleEditItemSubmit(e) {
        e.preventDefault();
        if ( editingItem !== '' ) {
            updateState(props.setListItems, props.id, {name: editingItem, editMode: false, id: props.id})
            setEditingItem('');
        }
    }

    useOutsideClick(ref, ()=>{
        updateState(props.setListItems, props.id, {name: editingItem, editMode: false, id: props.id})
    });

    return (
        <div ref={ref}>
            <form onSubmit={handleEditItemSubmit}>
                <input className="list-section__item-edit"
                       type="text"
                       placeholder={editingItem}
                       value={editingItem}
                       onChange={(e)=>{
                           setEditingItem(e.target.value);
                       }}/>
                <button className="btn edit-btn">Submit</button>
            </form>
            <div>
                <button onClick={()=>removeItemFromList(props.setListItems, props.id)} className="btn edit-btn">
                    Delete
                </button>
            </div>
        </div>
    )
}

function renderItemForm(itemFormOpen, setItemForm, setListItems, btnName) {
    // If user want to add new item, return form, else return button
    if ( itemFormOpen ) {
        return <AddNewListItem formOpen={setItemForm} setListItems={setListItems}/>
    } else {
        return <button onClick={ ()=>setItemForm(true) } className="btn">+ {btnName}</button>
    }
}

function AddNewListItem(props) {
    const [newListItem, setNewListItem] = useState('');
    const ref = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        if ( newListItem !== '' ) {
            props.setListItems((prev)=>{
                return [...prev, {name: newListItem, editMode: false, id: Date.now()}]
            })
            setNewListItem('');
            props.formOpen(false);
        }
    }

    useOutsideClick(ref, ()=>{
        props.formOpen(false);
    });

    return (
        <form ref={ref} onSubmit={handleSubmit}>
            <input type="text"
                   placeholder="Add new"
                   value={newListItem}

                   onChange={(e)=>{
                       setNewListItem(e.target.value);
                   }}/>
            <button className="btn">Submit</button>
        </form>
    )
}

export { ListSection }