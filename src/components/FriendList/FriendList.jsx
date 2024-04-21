import { FriendListItem } from 'components/FriendListItem/FriendListItem'
import css from './FriendList.module.css'
import PropTypes from 'prop-types';

export const FriendList = (friends) => {
    return (
        <ul className={css['friend-list']}>
            {friends.friends.map((friend) => {
                return (
                   <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
               )
           })}
        </ul>);
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};