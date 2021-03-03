/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
// import Checkbox from '@material-ui/core/Checkbox';

import data from '../../data/informationProject.json';
import ComplexGrid from '../Item/Item';

const List = () => {
  const [isToggleSelected, setToggleSelected] = useState(true);
  const [selectedChecks, setSelectedChecks] = useState(data.information);

  const handleAllChecked = () => {
    setToggleSelected(!isToggleSelected);
    const copyInformation = selectedChecks.map((item) => (
      isToggleSelected === true ? { ...item, isChecked: true } : { ...item, isChecked: false }
    ));
    setSelectedChecks(copyInformation);
  };
  const handleChangeChild = (e) => {
    const { name, checked } = e.target;

    const copyInformation = selectedChecks.map((item) => (
      item.name === name ? { ...item, isChecked: checked } : item
    ));
    setSelectedChecks(copyInformation);
  };

  return (
    <>
      <h1>Ideation</h1>
      <button
        type="button"
        onClick={handleAllChecked}
      >
        {(isToggleSelected ? 'select all in ideation' : 'deselect all in ideation')}
      </button>
      {
        selectedChecks.map((item) => (
          (item.phase === 'Ideation')
            ? (

              <div key={item.id}>
                <input onChange={handleChangeChild} type="checkbox" name={item.name} checked={item.isChecked} />
                <ComplexGrid infoItem={item} />
              </div>
            ) : ''
        ))
      }
      <h1>Validation</h1>
      <button type="button">Select all in validation</button>
      {
        data.information.map((item) => (
          (item.phase === 'Validation')
            ? (
              <div key={item.id}>
                <input type="radio" />
                <ComplexGrid infoItem={item} />
              </div>
            ) : ''
        ))
      }
    </>

  );
};
export default List;
