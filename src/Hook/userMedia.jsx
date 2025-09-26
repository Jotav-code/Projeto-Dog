import React from 'react';

const userMedia = (ismedia) => {
  const [media, setMedia] = React.useState('');

  React.useEffect(() => {
    function handleMedia() {
      const { matches } = window.matchMedia(ismedia);
      setMedia(matches);
    }
    addEventListener('resize', handleMedia);
    handleMedia();
    return () => {
      removeEventListener('resize', handleMedia);
    };
  }, [media]);

  return media;
};

export default userMedia;
