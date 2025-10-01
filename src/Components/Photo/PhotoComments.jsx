import React from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import Style from './PhotoComments.module.css';

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);

  const commmentsSection = React.useRef();
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commmentsSection.current.scrollTop = commmentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commmentsSection}
        className={`${Style.comments} ${props.single ? Style.single : ''}`}
      >
        {comments.map((comment) => {
          return (
            <li key={comment.comment_ID}>
              <b>{comment.comment_author}:</b>
              <span>{comment.comment_content}</span>
            </li>
          );
        })}
      </ul>
      {login && (
        <PhotoCommentsForm
          id={props.id}
          single={props.single}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default PhotoComments;
