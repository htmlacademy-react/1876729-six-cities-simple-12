import {useAppSelector} from '../../hooks';

type SortingItemType = {
  variable: string;
  onVariableChange: (city: string) => void;
}

type RootState = {
  variableSort: string;
}

function SortingOption({variable, onVariableChange}: SortingItemType) {
  const variableSort = useAppSelector((state: unknown) => (state as RootState).variableSort);

  // TODO сделать исходя и стора
  return (
    <li className={variableSort === variable ? 'places__option places__option--active' : 'places__option'} tabIndex={0}
      onClick={(event) => {
        event.preventDefault();
        onVariableChange(variable);
      }}
    >
      {variable}
    </li>
  );
}

export default SortingOption;
