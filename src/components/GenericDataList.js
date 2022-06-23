import React from 'react';
import styled from 'styled-components';

const MessagesList = styled.FlatList`
    flex: 1;
`;

export default GenericDataList = ({ data, renderItem, inverted, horizontal, customContentContainerStyle }) => {
    //this component uses a performatically configured flatList
    return <MessagesList
        contentContainerStyle={customContentContainerStyle}
        data={data}
        inverted={inverted}
        horizontal={horizontal}
        initialNumToRender={15}
        maxToRenderPerBatch={15}//items per batch
        updateCellsBatchingPeriod={100}//Increase time between renders
        windowSize={15}//maximum number of items rendered outside of the visible area
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
    />
}
