import { useState } from 'react';
import { timestamp } from '../../firebase/config';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useFirestore } from '../../hooks/useFirestore';
import Avatar from '../../components/Avatar';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default function ProjectComments({ project }) {
  const { updateDocument, response } = useFirestore('projects');
  const [newComment, setNewComment] = useState('');
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const commentToAdd = {
      user: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random() * 10 + user.displayName,
    };

    await updateDocument(project.id, {
      comment: [...project.comment, commentToAdd],
    });
    if (!response.error) {
      setNewComment('');
    }
  };

  return (
    <div className="project-comments">
      <h4>Project Comments</h4>
      <ul>
        {project.comment.length > 0 &&
          project.comment.map((com) => (
            <li key={com.id}>
              <div className="comment-author">
                {<Avatar src={com.photoURL} />}
                <p>{com.user}</p>
              </div>
              <div className="comment-date">
                <p>
                  {formatDistanceToNow(com.createdAt.toDate(), {
                    addSuffix: true,
                  })}
                </p>
              </div>
              <div className="comment-content">
                <p>{com.content}</p>
              </div>
            </li>
          ))}
      </ul>

      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Add comments</span>
          <textarea
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          />
        </label>
        <button className="btn">Add comment</button>
      </form>
    </div>
  );
}
