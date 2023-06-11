import { Link } from "react-router-dom";

// assets
import defaultPic from "../../assets/images/ga.png";

// types
import { Profile } from "../../types/models";

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  const { profile } = props;

  const profilePic = profile.photo ? profile.photo : defaultPic;

  return (
    <Link to={`/profiles/${profile.id}`} state={profile}>
      <article>
        <h3>Terras irradient</h3>
        <div className="cap">🎓</div>
        <img
          src={profilePic}
          alt={`${profile.name}'s avatar`}
          className="profileImg"
        />
        <h4>{profile.name}</h4>
      </article>
    </Link>
  );
};

export default ProfileCard;
