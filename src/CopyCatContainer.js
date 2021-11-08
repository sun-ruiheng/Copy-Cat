import React from 'react';
import {CopyCat} from './CopyCat';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


export class CopyCatContainer extends React.Component {
    constructor(props) {
    super(props);

    this.state = { 
      copying: true,
      value: ''
    };

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleTape() {
    this.setState({copying: !this.state.copying})
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }
  
  render() {
    const copying = this.state.copying;
    const toggleTape = this.toggleTape;
    const value = this.state.value;
    const onChange = this.handleChange;
    
    return (
      <CopyCat 
        copying={copying}
        toggleTape={toggleTape}
        onChange={onChange}
        value={value}
        name="Bob"
      />
    );
  };
}
