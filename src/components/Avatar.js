//styles
import './Avatar.css';

export default function Avatar({ src, handleAvaClick }) {
  return (
    <div className="avatar" onClick={handleAvaClick}>
      <img src={src} alt="user avatar" />
    </div>
  );
}
