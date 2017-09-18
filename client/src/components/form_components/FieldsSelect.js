// Fields component contains logic for rendering single input fields
import React from 'react';

const style = {
  color: 'red',
};

const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']

export default ({ select, label, name }) => { // { input } analgous to props.input (contains all the callback functions)
  return (
    <div>
      <label>Favorite Color</label>
      <select name={name} component='select'>
        <option value=''>Select an Entity...</option>
        {colors.map(colorOption =>
          <option value={colorOption} key={colorOption}>
            {colorOption}
          </option>
        )}
      </select>
    </div>
  );
};
