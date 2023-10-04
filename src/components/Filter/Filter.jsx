import {LabelFind, ImputFind, Wrap} from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({onChangeFilter, value}) => {
    const handleChange = ({target: {value}}) => {
        onChangeFilter(value);
    }
    return (
    <Wrap>
      <LabelFind>Find contacts by name</LabelFind>
      <ImputFind 
           type="text"
           value={value} 
           onChange={handleChange}
           />
    </Wrap>
     
)}
Filter.propTypes = {
    onChangeFilter: PropTypes.func.isRequired 
}
export default Filter;