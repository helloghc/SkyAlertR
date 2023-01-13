import styled, { withTheme } from 'styled-components';

const Block = styled.button`
  display: block;
  font-family: var(--main-font-bold);
  font-size: 13px;
  box-shadow: 0 0 0 0 transparent;
  background: ${( { theme:{ buttons } } ) => (buttons.block.bg)};
  color: ${( { theme:{ solid } } ) => (solid.white)};
  border: 0;
  outline: 0;
  padding: 0;
  cursor: pointer;
  height: 47px;
  padding: 12px 20px;
  border-radius: var(--main-border-radius);
  margin: auto;
  transition: background 100ms, color 400ms, box-shadow 400ms;
    
  &:hover, &:active{
    background: ${( { theme:{ buttons } } ) => (buttons.block.hover)};
    box-shadow: ${( { theme:{ footer:{ shadow } } } ) => (`0 5px 10px ${shadow.first}, 0 3px 3px ${shadow.second}`)};
  }

  &:disabled,
  &[disabled=disabled]{
    background-color: #cccccc;
    color: #666666;
  }

  
`;

export default withTheme(Block);