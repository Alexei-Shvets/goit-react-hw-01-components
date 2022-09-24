import propTypes from "prop-types";
import {
    Status,
    Friend,
    Avatar,
    UserName
} from "./FriendListItem.styled";

const FriendListItem = ({ avatar, name, isOnline }) =>
(
    <Friend>
        <Status isOnline={isOnline}></Status>
        <Avatar src={ avatar } alt="User avatar" width="48" />
        <UserName>{name}</UserName>
    </Friend>
)


FriendListItem.propTypes = {
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,    
};

export default FriendListItem;