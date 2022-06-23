import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import MessageItem from './MessageItem';
import TipItem from './TipItem';
import { GenericDataList } from '@components/index';

export default function Body({ matchedProfile, profileImage }) {

    const { realTimeFirebaseChat } = useSelector(state => state.firebase);
    const { id: userId } = useSelector(state => state.user.userData);

    const [chatMessages, setChatMessages] = useState([]);

    useEffect(() => {
        setChatMessages(realTimeFirebaseChat.filter(item =>
            item.userId_1 == matchedProfile?.id || item.userId_2 == matchedProfile?.id && item
        ));
    }, [realTimeFirebaseChat]);

    const MessageItemFL = ({ item }) => <MessageItem userId={userId} messageItem={item} />

    const BodyContent = () => {
        return chatMessages.length > 0 ? <GenericDataList
            inverted
            customContentContainerStyle={{ paddingTop: 5 }}
            data={chatMessages}
            renderItem={MessageItemFL}
        /> : <TipItem profileImage={profileImage} />
    }

    return <BodyContent />
}
