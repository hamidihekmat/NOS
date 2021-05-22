import { useState, useEffect } from 'react';

// view is the width of the container which will the carousel slide to on (Next|Prev)
export function useSlider(ref: HTMLDivElement | undefined, view = 1) {
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);
  const [size, setSize] = useState(0);

  const trackScroll = (event: Event) => {
    const { scrollLeft, clientWidth, scrollWidth } =
      event.target as HTMLDivElement;

    const maxWidth = scrollLeft + clientWidth;
    const width = clientWidth / view;
    setSize(Math.ceil(scrollWidth / width / 2));

    if (scrollLeft != 0) {
      setShowPrev(true);
    } else {
      setShowPrev(false);
    }

    if (maxWidth === scrollWidth) {
      setShowNext(false);
    } else {
      setShowNext(true);
    }
  };

  useEffect(() => {
    if (ref) {
      const { scrollWidth, clientWidth } = ref;

      if (scrollWidth === clientWidth) {
        setShowNext(false);
      }

      ref.addEventListener('scroll', trackScroll);
    }
  }, [ref, setShowNext]);

  const next = () => {
    if (ref) {
      const width = ref.offsetWidth / view;
      ref.scrollLeft += width;
      ref.scrollLeft += width;
    }
  };
  const previous = () => {
    if (ref) {
      const width = ref.offsetWidth / view;
      ref.scrollLeft -= width;
      ref.scrollLeft -= width;
    }
  };

  return { next, previous, showPrev, showNext, size };
}
