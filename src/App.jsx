import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/Transactoins/Transactions';
import { TransactionData } from 'components/Transactoins/TransactionData/TransactionData';

import user from 'data/user.json';
import statisticData from 'data/statisticData.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
        avatar={user.avatar}
      />
      <Statistics title="Upload stats" stats={statisticData} />
      <FriendList friends={friends} />
      <TransactionHistory>
        <TransactionData items={transactions} />
      </TransactionHistory>
    </>
  );
};
