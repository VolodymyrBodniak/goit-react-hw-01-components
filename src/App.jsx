import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';

import user from 'data/user.json';
import data from 'data/data.json';

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
      <Statistics title="Upload stats" stats={data} />
    </>
  );
};
