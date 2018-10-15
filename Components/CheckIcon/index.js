import React from 'react';
import { PropTypes } from 'prop-types';
import { Svg } from 'expo';
const { Path } = Svg;

const CheckIcon = ({ iconAttributes }) => (
  <Svg
    width={iconAttributes.width}
    height={iconAttributes.height}
    viewBox="0 0 12 12"
  >
    <Path
      d="M11.519 0L4.234 7.105 1.442 4.433 0 5.903l4.191 4.103h.018l8.773-8.564z"
      fill={iconAttributes.color}
      fill-rule="evenodd"
    />
  </Svg>
);

CheckIcon.propTypes = {
  iconAttributes: PropTypes.object.isRequired,
};

export default CheckIcon;
