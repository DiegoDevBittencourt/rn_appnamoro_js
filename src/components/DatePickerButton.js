import React, { useState } from 'react';
import styled from 'styled-components';
import DateTimePicker from "react-native-modal-datetime-picker"

import GenericRowView from './GenericRowView';
import P from './P';
import { convertDateFormatToDDMMYYYY } from '~/utils/functions';
import { maxBirthdayDate } from '@constants/GenericConstants';
import { theme } from '@constants/StyledComponentsTheme';

const MainContainer = styled(GenericRowView)`
    height: ${props => props.theme.$heightOfGenericComponent}px;
    width: 100%;
    margin-top: 10px;
    background-color: ${props => props.theme.$lightGray};
    border-radius: ${props => props.theme.$smallBorderRadius}px;
    padding: 1px 4px;
    align-items: center;
    justify-content: center;
`;

const Button = styled.TouchableHighlight`
    height: 100%;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    background-color: white;
    border-top-right-radius: ${props => props.theme.$smallBorderRadius}px;
    border-bottom-right-radius: ${props => props.theme.$smallBorderRadius}px;
    padding-left: 9px;
`;

export default DatePickerButton = (props) => {

    const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);

    const handleDatePicked = (selectedDate) => {
        setIsDateTimePickerVisible(false);
        props.updateSelectedDate(convertDateFormatToDDMMYYYY(selectedDate));
    }

    const { selectedDate } = props;

    return <MainContainer>

        <DateTimePicker
            minimumDate={new Date('1900-01-01')}
            maximumDate={maxBirthdayDate}
            isVisible={isDateTimePickerVisible}
            onConfirm={(date) => handleDatePicked(date)}
            onCancel={() => setIsDateTimePickerVisible(false)}
        />

        <Button underlayColor={theme.$lightGray} onPress={() => setIsDateTimePickerVisible(true)}>

            <P>{selectedDate ? selectedDate : 'Data de nascimento (+18)'}</P>

        </Button>
    </MainContainer >
}
