import { PropTypes } from 'react';

export default {
  token: PropTypes.string,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    checkins: PropTypes.arrayOf(PropTypes.shape({
      username: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      timestamp: PropTypes.number.isRequired,
    })),
  }),
};
