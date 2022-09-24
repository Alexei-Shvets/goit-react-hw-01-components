import propTypes from "prop-types";
import {
  ProfileCard,
  Description,
  Name,
  Avatar,
  Stats,
  StatsItem,
  LabelSpan,
} from "./Profile.styled";

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes }
}) =>
  (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt="User avatar"/>
        <Name>{username}</Name>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </Description>

      <Stats>
        <StatsItem>
          <LabelSpan>Followers</LabelSpan>
          <span className="quantity">{followers}</span>
        </StatsItem>
        <StatsItem>
          <LabelSpan>Views</LabelSpan>
          <span className="quantity">{views}</span>
        </StatsItem>
        <StatsItem>
          <LabelSpan>Likes</LabelSpan>
          <span className="quantity">{likes}</span>
        </StatsItem>
      </Stats>
    </ProfileCard>
);

Profile.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.objectOf(propTypes.number.isRequired).isRequired,
};
  
export default Profile
