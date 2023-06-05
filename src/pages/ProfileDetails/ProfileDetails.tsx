// npm modules
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// services
import * as profileService from '../../services/profileService'

// css
import styles from "./ProfileDetails.module.css"


import { Comment, Profile  } from "../../types/models"

//load comments as part of the profile in the useffect

const ProfileDetails = (): JSX.Element => {
  const { profileId } = useParams()
  const [profile, setProfile] = useState<Profile | null>(null);

  

  useEffect((): void => {
    const fetchProfile = async (): Promise<void>=> {
      try {
        if(!profileId) return
      const profileData = await profileService.show(profileId)
      setProfile(profileData)
      console.log(profileData);
      }catch (error) {
        console.log(error);
        
      }
    }
    fetchProfile()
  },[profileId])

  if(!profile) return <h1>testtesttest</h1>
  if (!profile.commentsReceived) 

  console.log(profile);
  

  return (
    <>

    <main className={styles.container}>
    {profile.name}
    <img src={profile.photo} alt={`${profile.name}'s avatar`} className="photo"/>
      {profile.commentsReceived.map((comment: Comment) => (
        <h3 key={comment.id}>{comment.value}</h3>
      ))}
      </main>
      </>
    
  )
}

export default ProfileDetails