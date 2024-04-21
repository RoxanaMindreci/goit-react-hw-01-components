import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Container } from './Container/Container';
import { FriendList } from './FriendList/FriendList';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

// console.log(data);

export const App = () => {
  return (
    <Container>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      /><Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
   <TransactionHistory items={transactions}/>
    </Container>
   
  );
};