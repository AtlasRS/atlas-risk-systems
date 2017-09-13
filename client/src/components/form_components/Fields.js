// Fields component contains logic for rendering single input fields
import React from 'react';

const style = {
  color: 'red',
};

export default ({ input, label, meta: { error, touched } }) => { // { input } analgous to props.input (contains all the callback functions)
  return (
    <div>
      <div style={style}>
        {touched && error}
      </div>
      <input {...input} placeholder={label} />
    </div>
  );
};
