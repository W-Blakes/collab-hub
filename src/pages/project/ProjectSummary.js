import { useFirestore } from '../../hooks/useFirestore';
import Avatar from '../../components/Avatar';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

//style
import './Project.css';

export default function ProjectSummary({ project }) {
  const { deleteDocument, response } = useFirestore('projects');
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const handleClick = () => {
    deleteDocument(project.id);
    if (!response.error) {
      navigate('/');
    }
  };
  return (
    <div>
      <div className="project-summary">
        <h2 className="project-title">{project.name}</h2>
        <p className="project-creator">By {project.createdBy.displayName}</p>
        <p className="due-date">
          Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">{project.details}</p>
        <h4>Project is assigned to:</h4>
        <div className="assigned-users">
          {project.assignedUsersList.map((users) => (
            <div className="avatar" key={users.id}>
              <Avatar src={users.photoURL} />
            </div>
          ))}
        </div>
      </div>
      {project.createdBy.id === user.uid && (
        <button className="btn" onClick={handleClick}>
          Mark as complete
        </button>
      )}
    </div>
  );
}
