import PropTypes from 'prop-types';
import s from "./FriendList.module.css"
import { FriendsListItem } from "components/FriendListItem/FriendListItem"
export const FriendsList = ({friend}) => {
    return <ul className={s.friendList}>
  {friend.map(({avatar, name, isOnline, id}) => <FriendsListItem avatar={avatar} name={name} isOnline={isOnline} key={id}/>)}
</ul>
}

FriendsList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};