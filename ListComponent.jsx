import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types'
import SingleListItem from "./src/WrappedSingleListItem";

// List Component
const WrappedListComponent = ({
    items,
  }) => {
    const [selectedIndex,setSelectedIndex] = useState(false);
  
    useEffect(() => {
      setSelectedIndex(false);
    }, [items]);
  
    const handleClick = index => {
      console.log(index);
      setSelectedIndex(index);
    };
  
    return (
      <ul style={{ textAlign: 'left' }}>
        {items.map((item, index) => (
          <SingleListItem
            onClickHandler={(index) => handleClick}
            text={item.text}
            index={index}
            key = {index}
            isSelected={selectedIndex}
          />
        ))}
      </ul>
    )
  };
  
  WrappedListComponent.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired
    })).isRequired
  };
  
  WrappedListComponent.defaultProps = {
    items: [{text:"my name"}]
  };
  
  const List = memo(WrappedListComponent);
  
  export default List;
  