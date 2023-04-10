import React, { useState } from 'react';
import {variablesSort} from '../../mocks/sorting-variables';
import SortingOption from '../sorting-item/sorting.option';
import {variableChange} from '../../store/action';
import {useDispatch} from 'react-redux';

function SortingForm() {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();

  function handleClick() {
    setIsClicked(!isClicked);
  }

  const onVariableChange = (variable: string) => {
    dispatch(variableChange(variable));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={handleClick} className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={isClicked ? 'places__options places__options--custom places__options--opened' : 'places__options places__options--custom'}>
        {/*places__option--active*/}
        {variablesSort.map((item) => <SortingOption key={item.id} onVariableChange={onVariableChange} variable={item.value}></SortingOption>)}
      </ul>
    </form>
  );
}

export default SortingForm;
