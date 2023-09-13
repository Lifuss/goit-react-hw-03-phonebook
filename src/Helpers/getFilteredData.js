import PropTypes from 'prop-types';

const getFilteredData = (data, filter) => {
  return data.filter(
    item =>
      item.name.toLowerCase().includes(filter.toLowerCase()) ||
      item.number?.toLowerCase().includes(filter.toLowerCase())
  );
};

export default getFilteredData;

getFilteredData.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
};
