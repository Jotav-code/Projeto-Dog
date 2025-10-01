import React, { useState } from 'react';
import FeedModal from './FeedModal/FeedModal';
import FeedPhotos from './FeedPhotos/FeedPhotos';
const Feed = ({ user }) => {
  const [modal, setModal] = useState(null);
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let wait = false;
    function infiniteScroll(event) {
      if (infinite) {
        const scroll = window.scrollY;
        const heith = document.body.offsetHeight - window.innerHeight;
        if (scroll > heith * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    addEventListener('wheel', infiniteScroll);
    addEventListener('scroll', infiniteScroll);
    return () => {
      removeEventListener('wheel', infiniteScroll);
      removeEventListener('scroll', infiniteScroll);
    };
  }, [infinite]);

  return (
    <section>
      {modal && <FeedModal photo={modal} setModal={setModal} />}

      {pages.map((page) => {
        return (
          <FeedPhotos
            key={page}
            user={user}
            page={page}
            setModal={setModal}
            setInfinite={setInfinite}
          />
        );
      })}
    </section>
  );
};

export default Feed;
