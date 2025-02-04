// import React, { Component } from 'react';

// class InputField extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: '',
//     };
//     this.handleChange = this.handleChange.bind(this); // Bind `this`
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           value={this.state.value}
//           onChange={this.handleChange}
//         />
//         <p>You typed: {this.state.value}</p>
//       </div>
//     );
//   }
// }

// export default InputField;

import React, { useState } from 'react';

function InputField() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>You typed: {value}</p>
    </div>
  );
}

export default InputField;