import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { LabelFind, ImputFind, Wrap } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = ({ target: { value } }) => {
    const filterQuery = value.trim();
    dispatch(setFilter(filterQuery));
  };
  return (
    <Wrap>
      <LabelFind>Find contacts by name</LabelFind>
      <ImputFind type="text" value={filter} onChange={handleChange} />
    </Wrap>
  );
};

export default Filter;
