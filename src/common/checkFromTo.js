const checkFromTo = (from, to) => {
  if (new Date(from).getTime() - new Date(to).getTime() > 0) return true;
  return false;
};

export default checkFromTo;
