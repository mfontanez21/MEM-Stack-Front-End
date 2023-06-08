// services
import * as tokenService from './tokenService'



const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/comments`


async function deleteComment(commentId: number):Promise<void> {
  
  await fetch(`${BASE_URL}/${commentId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
    }
  })
}

export { deleteComment, }