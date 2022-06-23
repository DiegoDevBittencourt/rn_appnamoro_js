import React from 'react';
import styled from 'styled-components';
import RNMultiSlider from '@ptomasroos/react-native-multi-slider';

import GenericColumnView from './GenericColumnView';
import GenericRowView from './GenericRowView';
import P from './P';
import { theme } from '@constants/StyledComponentsTheme';

const MainContainer = styled(GenericColumnView)`
    height: 70px;
    padding: 10px;
`;

const MultiSliderComponentCustom = styled(RNMultiSlider)`
    height: 100%;
    width: 100%;
    position: absolute;
    justify-content: center;
    align-items: center;
`;

const PCustom = styled(P)`
    flex: 1;
    text-align: right;
`;

export default MultiSlider = ({
    values,
    title,
    rightText,
    min,
    max,
    onValuesChange,
    customContainerStyle,
    onValuesChangeFinish
}) => {

    return <MainContainer style={customContainerStyle}>

        <GenericRowView>

            <P>{title}</P>

            {
                values && values.length > 1 ?
                    <PCustom>Entre {values[0]} e {values[1]}{values[1] === max && '+'}</PCustom>
                    :
                    <PCustom>{`${values[0]} ${rightText}`}{values[0] === max && '+'}</PCustom>
            }

        </GenericRowView>

        <MultiSliderComponentCustom
            min={min}
            max={max}
            values={values}
            sliderLength={325}
            markerStyle={{ height: 30, width: 30, borderRadius: 40, backgroundColor: theme.$primaryColor }}
            selectedStyle={{ backgroundColor: theme.$primaryColor }}
            containerStyle={{ alignItems: 'center' }}
            onValuesChange={onValuesChange}
            onValuesChangeFinish={onValuesChangeFinish}
        />
    </MainContainer>
}
