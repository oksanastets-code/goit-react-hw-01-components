import Profile from './components/social-profile/Profile';
import user from './components/social-profile/user.json';
import FriendList from './components/friend-list/FriendList';
import friends from './components/friend-list/friends.json';
import Section from './components/statistics/Section';
import data from './components/statistics/data.json';

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <FriendList items={friends} />
      <Section items={data} />
    </div>
  );
}
