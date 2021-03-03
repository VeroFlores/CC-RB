import { useState } from 'react';
import data from '../data/informationProject.json';
// custom hooks
const checkboxesState = () => {
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
  return {
    handleAllChecked, handleChangeChild, selectedChecks, isToggleSelected,
  };
};
export default checkboxesState;
