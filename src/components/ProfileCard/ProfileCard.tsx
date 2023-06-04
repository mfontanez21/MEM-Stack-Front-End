// assets
import defaultPic from '../../assets/images/ga.png'

// types
import { Profile } from '../../types/models'

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  const { profile } = props

  const profilePic = profile.photo ? profile.photo : defaultPic

  return (
    <article>
      <h1>GA SEI Class of 3/20/23</h1>
      <img src={profilePic} alt={`${profile.name}'s avatar`} />
      <h1>{profile.name}</h1>
    </article>
  )
}

export default ProfileCard