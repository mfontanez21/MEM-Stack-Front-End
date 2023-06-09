// npm modules
import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"


// services
import * as profileService from '../../services/profileService'
import * as commentService from '../../services/commentService'

// css
import styles from "./ProfileDetails.module.css"

//pages
import NewComment from "../../components/NavBar/NewComment/NewComment"

import defaultPic from '../../assets/images/ga.png'

import { Comment, Profile, User  } from "../../types/models"
import { CommentFormData } from "../../types/forms"

interface Props {
  profiles: Profile[]
  user: User | null
}

//load comments as part of the profile in the useffect

const ProfileDetails = (props: Props): JSX.Element => {
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

  const handleAddComment = async (commentFormData: CommentFormData): Promise<void> => {
    
    if (profile && profileId){
      const newComment: Comment = await profileService.createComment(profileId, commentFormData)
      const updatedProfile: Profile = {...profile, commentsReceived: [...profile.commentsReceived, newComment]}
      setProfile(updatedProfile)
    }
  }

  const handleDeleteComment = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    try{
      if (profile && profileId){
        const commentId = parseInt(event.currentTarget.id)
        await commentService.deleteComment(commentId)
        const updatedProfile: Profile = {...profile, commentsReceived: profile.commentsReceived.filter((c) => c.id !== commentId) }
        setProfile(updatedProfile)
      }
    } catch (error) {
      console.log(error);
      
    }
    
  }


  

  if(!profile) return <h1>No profile!</h1>
  if(!props.user) return <h1>No users!</h1>

  console.log(profile);
  

  return (
    
    <>
    <main className={styles.container}>
    {profile.name}
    <img src={profile.photo ? profile.photo : defaultPic} alt={`${profile.name}'s avatar`} className={styles.photo}/>
      {profile.commentsReceived.map((comment: Comment) => (
        <div className={styles.signee}>
        <h3 key={comment.id}>{comment.value}</h3>
        <img src = {props.profiles.find((p) => p.id === comment.commenterId)?.photo }/>
        
        {comment.commenterId === props.user?.profile.id && 
        <button id={comment.id.toString()} onClick={handleDeleteComment}>Delete</button>}
        <Link to={`/comments/${comment.id}`} state={{comment: comment, profileId: profileId}}>
        <button>Update</button>
        </Link>
        </div>
      ))}
        <h1>Comments</h1>
  <NewComment handleAddComment={handleAddComment} />
      </main>
      </>
    
  )
}

export default ProfileDetails