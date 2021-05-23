import prettyMilliseconds from 'pretty-ms';

export const formatDuration = (duration: number) => {
  let result = prettyMilliseconds(duration).split(' ');
  if (result.length > 2) {
    return `${result[0]}  ${result[1]}`;
  }
  return result[0];
};
