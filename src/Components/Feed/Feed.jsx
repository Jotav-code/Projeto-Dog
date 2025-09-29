import React, { useState } from 'react';
import FeedModal from './FeedModal/FeedModal';
import FeedPhotos from './FeedPhotos/FeedPhotos';
const Feed = () => {
  const [modal, setModal] = useState(null);

  return (
    <section>
      {modal && <FeedModal photo={modal} setModal={setModal} />}

      <FeedPhotos setModal={setModal} />
    </section>
  );
};

export default Feed;
