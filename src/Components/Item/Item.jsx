import React, {useImperativeHandle, useRef} from 'react';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import styles from './Item.module.css';
import DeleteIcon from "@material-ui/icons/Delete";
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import {DragSource, DropTarget} from 'react-dnd';
import ItemTypes from './ItemTypes';

const Item = (
    {
        isDragging,
        value,
        isDone,
        isImportant,
        onClickDone,
        onClickDelete,
        onClickImportant,
        id
    }) => {
    return (
        <div className={classnames({[styles.wrapper]: true, [styles.isImportant]: isImportant})}>
            <div className={styles.wrapper__text}>
                <Checkbox color="primary" checked={isDone} tabIndex={-1} onClick={() => onClickDone(id)}/>
                <span className={classnames({[styles.item]: true, [styles.done]: isDone})}>{value}</span>
            </div>

            <div className={styles.wrapper__icon}>
                <StarRoundedIcon onClick={() => onClickImportant(id)} className={classnames({
                    [styles.importantIcon]: true,
                    [styles.isImportant]: isImportant
                })}/>
                <DeleteIcon onClick={() => onClickDelete(id)} className={styles.deleteIcon}/>
            </div>
        </div>
    )
};

export default Item;
