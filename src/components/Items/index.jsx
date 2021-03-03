/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import Checkbox from '@material-ui/core/Checkbox';

import data from '../../data/informationProject.json';
import ComplexGrid from '../Item/Item';

const List = () => {
  const [isIdeationSelected, setIdeationSelected] = useState(true);
  const [isValidationSelected, setValidationSelected] = useState(true);

  const [ideation, setIdeation] = useState(data.Ideation);
  const [validation, setValidation] = useState(data.Validation);

  const handleAllIdeation = () => {
    setIdeationSelected(!isIdeationSelected);
    const copyInformation = ideation.map((item) => (
      isIdeationSelected === true ? { ...item, isChecked: true } : { ...item, isChecked: false }
    ));
    setIdeation(copyInformation);
  };
  const handleIdeationChild = (e) => {
    const { name, checked } = e.target;

    const copyInformation = ideation.map((item) => (
      item.name === name ? { ...item, isChecked: checked } : item
    ));
    setIdeation(copyInformation);
  };

  const handleAllValidation = () => {
    setValidationSelected(!isValidationSelected);
    const copyInformation = validation.map((item) => (
      isValidationSelected === true ? { ...item, isChecked: true } : { ...item, isChecked: false }
    ));
    setValidation(copyInformation);
  };
  const handleValidationChild = (e) => {
    const { name, checked } = e.target;

    const copyInformation = validation.map((item) => (
      item.name === name ? { ...item, isChecked: checked } : item
    ));
    setValidation(copyInformation);
  };
  const handleOnDragEnd = (result) => {
    console.log(result);
    if (!result.destination) return;

    const items = Array.from(validation);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setValidation(items);
  };
  console.log(ideation);
  console.log(validation);
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div>
        <h1>Ideation</h1>
        <button
          type="button"
          name="Ideation"
          onClick={handleAllIdeation}
        >
          {(isIdeationSelected ? 'select all in ideation' : 'deselect all in ideation')}
        </button>
        <ul>
          {
        ideation.map((item) => (
          (item.phase === 'Ideation')
            ? (

              <li key={item.id}>
                <input onChange={handleIdeationChild} type="checkbox" name={item.name} checked={item.isChecked} />
                <ComplexGrid infoItem={item} />
              </li>
            ) : ''
        ))
      }
        </ul>

      </div>

      <div>

        <h1>Validation</h1>
        <button
          type="button"
          onClick={handleAllValidation}
        >
          {(isValidationSelected ? 'select all in Validation' : 'deselect all in Validation')}
        </button>
        <Droppable droppableId="validationItems">
          {(provided) => (
            <ul className="validationItems" {...provided.droppableProps} ref={provided.innerRef}>
              {
        validation.map((item, index) => (
          <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided) => (
              <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <input onChange={handleValidationChild} type="checkbox" name={item.name} checked={item.isChecked} />
                <ComplexGrid infoItem={item} />
              </li>
            )}
          </Draggable>

        ))
      }
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </div>

    </DragDropContext>

  );
};
export default List;
