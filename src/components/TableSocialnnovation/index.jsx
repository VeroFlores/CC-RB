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
  List, Item, Container, Subtitle, Table, Div, IsActive,
}
  from './styles';
import DatePicker from '../DateTimePicker/index';

const TableSocialInnovation = () => {
  const allData = data.Ideation.concat(data.Validation);
  console.log(allData);

  const [information, setInformation] = useState(allData);

  const handleIdeationChild = (e) => {
    const { name, checked } = e.target;

    const copyInformation = information.map((item) => (
      item.name === name ? { ...item, isChecked: checked } : item
    ));
    setInformation(copyInformation);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(information);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setInformation(items);
  };
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Container>
        <Table>
          <Div>
            <Subtitle>SOCIAL INNOVATION</Subtitle>
          </Div>
          <Droppable droppableId="ideationItems">
            {(provided) => (
              <List className="ideationItems" {...provided.droppableProps} ref={provided.innerRef}>
                {
                information.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <Item ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <input onChange={handleIdeationChild} type="checkbox" name={item.name} checked={item.isChecked} />
                        <CardItem infoItem={item} isActive={item.isChecked} checked={item.isChecked} isSelected={handleIdeationChild} />
                        <IsActive shown={item.isChecked}>
                          <DatePicker />
                        </IsActive>
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
export default TableSocialInnovation;
