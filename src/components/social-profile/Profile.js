import PropTypes from 'prop-types';
// import s from './Profile.module.css';
import {
  ProfileDiv,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Label,
  Quantity,
  Item,
} from './Profile.styled';

export default function Profile({
  avatar,
  username,
  tag,
  location,
  followers,
  views,
  likes,
}) {
  return (
    <ProfileDiv>
      <Description>
        <Avatar src={avatar} alt="User avatar" width="150" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Item>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Item>
      </Stats>
    </ProfileDiv>
  );
  // return (
  //   <div className={s.profile}>
  //     <div className={s.description}>
  //       <img src={avatar} alt="User avatar" width="150" className={s.avatar} />
  //       <p className={s.name}>{username}</p>
  //       <p className={s.tag}>@{tag}</p>
  //       <p className={s.location}>{location}</p>
  //     </div>

  //     <ul className={s.stats}>
  //       <li className={s.item}>
  //         <span className={s.label}>Followers</span>
  //         <span className={s.quantity}>{followers}</span>
  //       </li>
  //       <li className={s.item}>
  //         <span className={s.label}>Views</span>
  //         <span className={s.quantity}>{views}</span>
  //       </li>
  //       <li className={s.item}>
  //         <span className={s.label}>Likes</span>
  //         <span className={s.quantity}>{likes}</span>
  //       </li>
  //     </ul>
  //   </div>
  // );
}
Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
