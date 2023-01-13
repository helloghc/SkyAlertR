import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ReactGA from 'react-ga';
import SkyAlertAPI from '../../../controllers/SkyAlertAPI';
import CustomField from './CustomField';
import { DEFAULT_VALUES_FORM, MESSAGES_ERROR } from './Constants';
import * as Styles from '../Styles';
import PropTypes from 'prop-types';

const MODAL_ROOT = document.getElementById('modal-root');

class ModalEpicenter extends Component {
  bgContainerRef = React.createRef();

  state = {
    fadeType: '',
    hasError: false,
    isLoading: false,
    sectionView: 'FORM',
    requestMessageError: '',
    fieldsForm: DEFAULT_VALUES_FORM,
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onEscKeyDown, false);
    setTimeout(() => this.setState({ fadeType: 'in' }), 0);
  }

  componentDidUpdate(prevProps) {
    if (!this.props.isOpen && prevProps.isOpen) {
      this.setState({ fadeType: 'out' });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscKeyDown, false);
  }

  sendEventGA = () => {
    const registrerEvent = window.location.href;
    ReactGA.initialize('UA-90455538-1');
    ReactGA.event({
      category: 'Epicenter Footer Cotización',
      action: registrerEvent,
      label: '',
    });
  }

  sendInformationForm = async (fields) => {
    const formBody = Object.values(fields).reduce((prev, cur) => ({...prev, [cur.name]: cur.value}), {});
    const body = {
      ...formBody,
      form: 'MXEPICENTER',
    };

    const {REQUIRED, SERVER, UNKNOWN} = MESSAGES_ERROR;
    try {
      this.setState({isLoading: true});
      const responseStatus = await SkyAlertAPI.init().createLead(body);
      switch (responseStatus) {
        case 200:
            this.sendEventGA();
            this.setState({
              sectionView: 'FINISH',
            })
            break;
        case 400:
          this.setState({ requestMessageError: REQUIRED });
          break;
        default:
          this.setState({ requestMessageError: SERVER });
          break;
      }
    }catch(error){
      this.setState({ requestMessageError: UNKNOWN });
      console.error('Fail request lead ',error);
    } finally{
      this.setState({isLoading: false});
    }
  }

  validationFields = () => {
    const { fieldsForm } = this.state;
    return Object.values(fieldsForm).map((field) => {
      if (!field.value && field.isRequired) {
        field.isError = true;
        this.updateFieldsValues(field);
        return true;
      }

      if(field.maxLength && !field.value > !field.maxLength){
        field.isError = true;
        this.updateFieldsValues(field); 
        return true;
      }

      if(field.regex && !field.value.match(field.regex)){
        field.isError = true;
        field.showMessage = true;
        this.updateFieldsValues(field); 
        return true;
      }

      return false;
    }, []);
  }

  resetAndClose = () => {
    const { fieldsForm } = this.state;
    const resetValues = Object.values(fieldsForm).map((field) => {
      field.value = field.field === 'select' ? '0' : '';
      field.showMessage = false;
      field.isError = false;
      field.isDisabled = false;
      return field;
    });

    this.setState({ 
      fadeType: 'out',
      requestMessageError: '',
      fieldsForm: resetValues,
    });
  }

  updateFieldsValues = (newValue) => {
    this.setState((prevState) => ({
      fieldsForm: [
        ...prevState.fieldsForm,
        ...newValue,
      ],
    }));
  }

  findPositionInput = (name) => this.state.fieldsForm.findIndex((field) => field.name === name);

  triggerUpdateValue = (name, value) => {
    const { fieldsForm } = this.state;
    const findIndex = this.findPositionInput(name);
    if(findIndex >= 0) {
      const newValueInput = fieldsForm[findIndex];
      newValueInput.value = value;
      newValueInput.isError = false;
      newValueInput.showMessage = false;
      this.updateFieldsValues(newValueInput);
    }
  }

  onEscKeyDown = (e) => {
    if (e.key !== 'Escape') return;
    this.setState({ fadeType: 'out' });
  };

  transitionEnd = (e) => {
    const {fadeType} = this.state;
    if (e.propertyName !== 'opacity' || fadeType === 'in') return;
    if (fadeType === 'out') {
      this.props.onClose();
    }
  };

  handlerInputOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.triggerUpdateValue(name, value);
  };

  handlerInputPhoneOnChange = (name, value) => {
    this.triggerUpdateValue(name, value);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { fieldsForm } = this.state;
    this.setState({ requestMessageError: '' });
    const fieldsCheck = this.validationFields();
    const isAllCorrect = fieldsCheck.every(field => !field);
    if(isAllCorrect){
      await this.sendInformationForm(fieldsForm);
    }
  }

  handlerOnClick = (e) => {
    e.preventDefault();
    this.resetAndClose();
  };

  renderLoader = () => (
    <Styles.LoaderContainer>
      { Array(2).fill('loader').map((key, index) =>
        <Styles.LoaderBounce key={`${key}-${index + 1}`}/>
      )}
    </Styles.LoaderContainer>
  );

  renderForm = () => {
    const { isLoading, fieldsForm, requestMessageError } = this.state;
    return (
      <Styles.ModalContainer>
        <Styles.SideImage />
        <Styles.SideForm>
          <Styles.ButtonClose onClick={this.handlerOnClick}>×</Styles.ButtonClose>
          { isLoading && this.renderLoader() }
          <Styles.FormHeader>
            <Styles.LogoEpicenter src={'/images/modal/epicenter/logo-epicenter.svg'} alt='Epicenter' />
            <Styles.Title>ALERTA SÍSMICA PARA EMPRESAS</Styles.Title>
          </Styles.FormHeader>
          <Styles.FormBody>
            <Styles.FormFields>
              { Object.values(fieldsForm).map((field, index) =>
                <CustomField 
                  {...field}
                  isDisabled={field.isDisabled || isLoading}
                  key={`field-custom-${index + 1}`}
                  onChange={this.handlerInputOnChange}
                  onChangePhone={this.handlerInputPhoneOnChange}
                />
              ) }
              <Styles.FieldLabel>
                <Styles.Required>*</Styles.Required>Campo obligatorio
              </Styles.FieldLabel>
            </Styles.FormFields>
          </Styles.FormBody>
          { !!requestMessageError.length && 
            <Styles.MessageError>{requestMessageError}</Styles.MessageError>
          }
          <Styles.FormFooter>
            <Styles.ButtonSend type='submit' onClick={this.handleSubmit}>
              Registrarme
            </Styles.ButtonSend>
          </Styles.FormFooter>
        </Styles.SideForm>
      </Styles.ModalContainer>
    );
  };

  renderCompletedForm = () => (
    <Styles.ModalCompleted>
      <Styles.ButtonClose onClick={this.handlerOnClick}>×</Styles.ButtonClose>
      <Styles.LogoSkyAlert src={'/images/modal/epicenter/logo-skyalert.svg'} alt='SkyAlert' />
      <Styles.TitleCompleted>¡Gracias por tu interés!</Styles.TitleCompleted>
      <Styles.ContainerTexts>
        <Styles.Paragraph>Hemos recibido tu información.</Styles.Paragraph>
        <Styles.Paragraph>Responderemos al correo que registraste.</Styles.Paragraph>
      </Styles.ContainerTexts>
      <Styles.ButtonSend onClick={this.handlerOnClick}>
        Aceptar
      </Styles.ButtonSend>
    </Styles.ModalCompleted>
  );

  render() {
    const { id, modalClass } = this.props;
    const { fadeType, sectionView } = this.state;

    return ReactDom.createPortal(
      <Styles.ModalStyled
        id={id}
        role='dialog'
        onTransitionEnd={this.transitionEnd}
        className={`fade-${fadeType} ${modalClass}`}
      >
        { 
          sectionView !== 'FORM' ?
            this.renderCompletedForm() :
            this.renderForm() 
        }
        <Styles.ModalBackground ref={this.bgContainerRef} />
      </Styles.ModalStyled>,
      MODAL_ROOT
    );
  }
}

ModalEpicenter.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  modalClass: PropTypes.string,
}

ModalEpicenter.defaultProps = {
  id: '',
  modalClass: '',
}

export default ModalEpicenter;
