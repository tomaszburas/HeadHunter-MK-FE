export const validationUrl = (url: string): boolean => {
  const urlPattern = new RegExp(
    '^(https?:\\/\\/)' + // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // validate fragment locator
  return urlPattern.test(url);
};

export const validationArrayUrl = (
  state: string[],
  setState: (param: string[]) => void
): boolean | string[] => {
  const arr = state.filter((el) => el !== '');
  if (arr.length === 0) {
    setState(['']);
    return true;
  }

  let incorrectUrl = arr.map((el) => validationUrl(el)).find((el) => !el);

  if (incorrectUrl === undefined) {
    incorrectUrl = true;
  }

  if (!incorrectUrl) {
    return false;
  }

  setState(arr);
  return true;
};
