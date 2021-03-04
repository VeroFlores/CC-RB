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
import CardItem from '../CardItem/index';
import {
  Button, List, Item, Container, Subtitle, Table, Div,
} from './style';

const TableAll = () => {
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
    if (!result.destination) return;
    if (result.source.droppableId === 'validationItems') {
      const items = Array.from(validation);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      setValidation(items);
    } else {
      const items = Array.from(ideation);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      setIdeation(items);
    }
  };
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Container>
        <Table>
          <Div>
            <Subtitle>IDEATION</Subtitle>
            <Button
              type="button"
              name="Ideation"
              onClick={handleAllIdeation}
            >
              {(isIdeationSelected ? 'select all in ideation' : 'deselect all in ideation')}
            </Button>
          </Div>

          <Droppable droppableId="ideationItems">
            {(provided) => (
              <List className="ideationItems" {...provided.droppableProps} ref={provided.innerRef}>
                {
                ideation.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <Item ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <input onChange={handleIdeationChild} type="checkbox" name={item.name} checked={item.isChecked} />
                        <CardItem infoItem={item} isActive={item.isChecked} />
                      </Item>
                    )}
                  </Draggable>
                ))
              }
                {provided.placeholder}
              </List>
            )}
          </Droppable>
        </Table>
        <Table>
          <Div>
            <Subtitle>VALIDATION</Subtitle>
            <Button
              type="button"
              onClick={handleAllValidation}
            >
              {(isValidationSelected ? 'select all in Validation' : 'deselect all in Validation')}
            </Button>
          </Div>
          <Droppable droppableId="validationItems">
            {(provided) => (
              <List className="validationItems" {...provided.droppableProps} ref={provided.innerRef}>
                {
                validation.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <Item ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <input onChange={handleValidationChild} type="checkbox" name={item.name} checked={item.isChecked} />
                        <CardItem infoItem={item} isActive={item.isChecked} />
                      </Item>
                    )}
                  </Draggable>

                ))
              }
                {provided.placeholder}
              </List>
            )}
          </Droppable>
        </Table>

      </Container>
    </DragDropContext>

  );
};
export default TableAll;
