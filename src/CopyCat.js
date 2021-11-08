import React from 'react';
import { styles } from './styles';
import PropTypes from 'prop-types';

const images = {
    copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
    quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


export class CopyCat extends React.Component {

    render() {
        const copying = this.props.copying;
        const toggleTape = this.props.toggleTape;
        const value = this.props.value;
        const onChange = this.props.onChange;
        const name = this.props.name;

        return (
            <div style={styles.divStyles}>
                <p style={styles.instructionStyles}>
                    (Click on {name} to shut him up!)
                </p>
                <h1 style={{ marginBottom: 50, marginTop: 0 }}>Copy Cat {name ? name : 'Tom'}</h1>
                <input
                    value={value}
                    type='text'
                    onChange={onChange}
                    style={styles.inputStyles}
                />
                <img
                    style={styles.imgStyles}
                    alt='cat'
                    src={copying ? images.copycat : images.quietcat}
                    onClick={toggleTape}
                />
                <p style={styles.catSpeechStyles}>
                    {copying && value}
                </p>
            </div>
        );
    };
}


CopyCat.propTypes = {
    copying: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    toggleTape: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string
}
