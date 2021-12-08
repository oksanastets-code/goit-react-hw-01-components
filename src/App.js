
import Profile from './components/Profile';
import user from './social-profile/user.json';


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
        </div>
    
  );
}
