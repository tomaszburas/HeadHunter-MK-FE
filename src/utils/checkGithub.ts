export const checkGithub = async (
  username: string,
  setState: (param: boolean) => void
) => {
  const res = await fetch(`https://api.github.com/users/${username}`);
  if (res.ok) {
    setState(true);
  } else {
    setState(false);
  }
};
