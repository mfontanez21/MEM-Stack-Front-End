// services
import { CommentFormData } from '../types/forms'
import * as tokenService from './tokenService'

import { Comment } from '../types/models'



const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/comments`


async function deleteComment(commentId: number):Promise<void> {
  
  await fetch(`${BASE_URL}/${commentId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
    }
  })
}

async function updateComment(commentId: number, commentFormData: CommentFormData): Promise<Comment> {

  const res = await fetch(`${BASE_URL}/${commentId}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,

    },
    body: JSON.stringify(commentFormData)
  })
  return await res.json() as Comment
}

export { deleteComment, updateComment}