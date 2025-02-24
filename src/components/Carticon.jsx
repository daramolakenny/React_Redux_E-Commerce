import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCart } from '@fortawesome/free-solid-svg-icons';

const Carticon = () => {
  return (
    <div>Carticon
        {/* <i class="" aria-hidden="true"></i> */}
        <FontAwesomeIcon icon={faCart} />
    </div>
  )
}

export default Carticon