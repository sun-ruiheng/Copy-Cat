const fontFamily = 'Comic Sans MS, Lucida Handwriting, cursive';
const fontSize = '5vh';
const backgroundColor = '#282c34';
const height = '100vh';
const divWidth = '100vw';
const display = "flex";
const flexDirection = 'column';
const alignItems = 'center';
const justifyContent = 'center';
const color = 'white';
const marginTop = '20px';
const width = '50%';

const instructionStyles = {
  position: 'fixed',
  top: '5px',
  fontSize: '3vh'
}

const divStyles = {
  fontFamily: fontFamily,
  fontSize: fontSize,
  color: color,
  backgroundColor: backgroundColor,
  display: display,
  flexDirection: flexDirection,
  alignItems: alignItems,
  justifyContent: justifyContent,
  height,
  width: divWidth,
};

const imgStyles = {
  marginTop: marginTop,
  maxHeight: '50%'
  // width: width
};

const inputStyles = {
  border: '2px solid',
  fontSize: '30px'
};

const catSpeechStyles = {
  position: 'fixed',
  bottom: '10px'
}

export const styles = {
  divStyles,
  imgStyles,
  inputStyles,
  instructionStyles,
  catSpeechStyles
}