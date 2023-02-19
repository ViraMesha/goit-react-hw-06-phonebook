import { useSelector, useDispatch } from 'react-redux';
import { FormLabel, FormInput } from './Filter.styled';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <FormLabel>
      Find contacts by name
      <FormInput
        type="text"
        onChange={onFilterChange}
        value={filter}
      ></FormInput>
    </FormLabel>
  );
};
