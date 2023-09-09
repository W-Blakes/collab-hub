import { Link } from 'react-router-dom';
import Avatar from './Avatar';

//styles
import './ProjectList.css';

export default function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.length === 0 && <p>No projects here</p>}
      {projects.map((project) => (
        <Link to={`/project/${project.id}`} key={project.id}>
          <h3>{project.name}</h3>
          <p>Due by {project.dueDate.toDate().toDateString()}</p>
          <div className="assigned-to">
            <ul>
              {project.assignedUsersList.map((user) => (
                <li key={user.id}>
                  <Avatar src={user.photoURL} />
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
}
