import React, { Component } from 'react'
import PhoneInput from 'react-phone-input-2';
import { ICONS_INPUTS } from './Constants';
import * as Styles from '../Styles';
import es from 'react-phone-input-2/lang/es.json'
import 'react-phone-input-2/lib/style.css'

const INPUT_CONFIG_PHONE = {
    country: 'mx',
    location: es,
    specialLabel: '',
    countryCodeEditable: false,
    defaultMask: '.. ... ... ....',
    preferredCountries: ['mx', 'us'],
};

class Fields extends Component {
    useRefInput = React.createRef();
    state = {
        isActiveFocus: false,
    }

    handlerOnFocus = () => {
        this.setState({ isActiveFocus: true })
    }

    handlerOnBlur = () => {
        this.setState({ isActiveFocus: false })
    }

    fieldCustomType = (field, propsInput) => {
        switch(field){
            case 'input':
                return (
                    <Styles.FieldCustomText {...propsInput} />
                );
            case 'select': {
                if(propsInput.options){
                    return (
                        <Styles.FieldCustomSelect {...propsInput}>
                            {Object.values(propsInput.options).map((optionSelect)=>
                                <Styles.FieldCustomSelectOpt 
                                    key={optionSelect.text}
                                    disabled={optionSelect.disabled} 
                                    value={optionSelect.value}>
                                    {optionSelect.text}
                                </Styles.FieldCustomSelectOpt>
                            )}
                        </Styles.FieldCustomSelect>
                    );
                }
                return <select />
            }
            default: 
                return <div />
        }
    };

    render() {
        const { isActiveFocus } = this.state;
        const {
            field,
            name, 
            value, 
            onChange,
            onChangePhone,
            icon, 
            maxLength, 
            type, 
            text,
            pattern, 
            placeholder, 
            isError, 
            isRequired,
            isDisabled, 
            options,
            message,
            showMessage,
        } = this.props;
        
        const propsInput = {
            name,
            value,
            options,
            onChange,
            maxLength,
            placeholder,
            pattern,
            required: isRequired,
            onBlur: this.handlerOnBlur,
            onFocus: this.handlerOnFocus,
            disabled: isDisabled,
        };

        const propsWrapper = {
            className: `${isError ? 'error': ''} ${isDisabled ? 'disabled': ''}`,
            focus: isActiveFocus,
        };

        const pathAsset = ( iconName = 'user') => `/images/modal/epicenter/${ICONS_INPUTS[iconName]}`;
        return (
            <Styles.FieldContainer>
                <Styles.FieldTextsContainer>
                    <Styles.FieldLabel>
                        {text} {isRequired && <Styles.Required>*</Styles.Required> }
                    </Styles.FieldLabel>
                    {showMessage && <Styles.FieldMessageError>{message}</Styles.FieldMessageError>}
                </Styles.FieldTextsContainer>
                {
                    field !== 'phone' ? (
                        <Styles.FieldWrapper {...propsWrapper}>
                            <Styles.Icon {...propsWrapper} src={pathAsset(icon)} />
                            {this.fieldCustomType(field, propsInput)}
                        </Styles.FieldWrapper>
                    ) : (
                        <React.Fragment>
                            <Styles.FieldWrapper {...propsWrapper}>
                                <Styles.Icon {...propsWrapper} src={pathAsset(icon)} />
                            </Styles.FieldWrapper>
                            <Styles.FieldCustomPhone>
                                <PhoneInput
                                    {...INPUT_CONFIG_PHONE}
                                    inputProps={{ name, type, maxLength}}
                                    disabled={isDisabled}
                                    placeholder={placeholder}
                                    value={value}
                                    onChange={(valueInput) => onChangePhone(name, valueInput)}
                                />
                            </Styles.FieldCustomPhone>  
                        </React.Fragment>
                    )
                }
            </Styles.FieldContainer>
        );
    }
};

export default Fields;
