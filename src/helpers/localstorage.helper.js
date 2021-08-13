function addToLocalStorage(data, type) {
  const storedList = JSON.parse(localStorage.getItem(type));
  if (!storedList?.length) {
    localStorage.setItem(
      type,
      JSON.stringify([
        {
          id: data.id,
          vote_average: data.vote_average,
          poster_path: data.poster_path,
        },
      ])
    );
  } else {
    const exist = storedList.findIndex((item) => item.id === data.id);
    if (exist !== -1) {
      storedList.splice(exist, 1);
      localStorage.setItem(type, JSON.stringify(storedList));
    } else {
      storedList.push({
        id: data.id,
        vote_average: data.vote_average,
        poster_path: data.poster_path,
      });
      localStorage.setItem(type, JSON.stringify(storedList));
    }
  }
}

export default addToLocalStorage;
