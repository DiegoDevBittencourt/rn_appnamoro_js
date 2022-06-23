import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import ConversationItem from './ConversationItem';
import { GenericDataList } from '@components/index';

export default function ConversationsContent() {

    const { realTimeFirebaseChat } = useSelector(state => state.firebase);
    const { matchedProfiles } = useSelector(state => state.match);
    const { id } = useSelector(state => state.user.userData);

    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        updateConversationsArray();
    }, [realTimeFirebaseChat]);

    const updateConversationsArray = () => {
        //filter realTimeFirebaseChat to create one item of each conversation that the user had with other users
        //containing matchedProfile info and the last message info of their conversation
        const matchedProfileIdsAlreadyOnConversationsHelper = [];

        const conversationsHelper = realTimeFirebaseChat.filter(messageItem => {
            const matchedProfileId = messageItem.userId_1 == id ? messageItem.userId_2 : messageItem.userId_1;

            if (!matchedProfileIdsAlreadyOnConversationsHelper.includes(matchedProfileId)) {
                matchedProfileIdsAlreadyOnConversationsHelper.push(matchedProfileId);
                return messageItem;
            }
        });

        //add matchedProfile info into each conversationItem:
        const conversationsFinal = conversationsHelper.map(message => {
            const matchedProfileId = message.userId_1 == id ? message.userId_2 : message.userId_1;

            const matchedProfile = matchedProfiles.filter(item => item.id == matchedProfileId)[0];

            return { ...message, matchedProfile };
        });

        setConversations(conversationsFinal);
    }

    const ConversationItemFL = ({ item }) => <ConversationItem
        matchedProfile={item.matchedProfile}
        conversationItem={item}
    />

    return <GenericDataList
        data={conversations}
        renderItem={ConversationItemFL}
    />
}
