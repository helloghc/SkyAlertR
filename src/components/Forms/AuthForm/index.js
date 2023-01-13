/* Libraries */
import styled from 'styled-components';
/* Utils */
//import {device} from 'utils/media';
/* Components */
import OverContainer from './OverContainer';
import Container from './Container';
import Group from './Group';
import Disclaimer from './Disclaimer';
import Title from './Title';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import GroupCheck from './GroupCheck';
import CheckBoxDiv from './CheckBoxDiv';
import CheckSpan from './CheckSpan';
import { device } from 'utils/media';

const Form = styled.div`
  /* Positioning */
  position: relative;
  /* Display & Box Model */
 
  /* Style */
  background: white;
  /*background: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 10%, rgba(73,56,139,1) 100%);*/
  /*background: url("images/bg.png") no-repeat left center, linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 10%, rgba(73,56,139,1) 100%);*/
  @media ${device.mobileS} {
      margin-top:10px;
      padding: 0rem 3rem;
      padding-bottom:10px;
  }
  @media ${device.desktop} {
     margin-top:30px;
     padding: 3rem;
  }
`;

Form.Container = Container;
Form.Disclaimer = Disclaimer;
Form.OverContainer = OverContainer;
Form.Group = Group;
Form.GroupCheck = GroupCheck;
Form.CheckBoxDiv = CheckBoxDiv;
Form.CheckSpan = CheckSpan;
Form.Title = Title;
Form.Input = Input;
Form.Select = Select;
Form.Button = Button;


export default Form;
