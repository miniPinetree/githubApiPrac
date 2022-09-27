export const storageKey = {
  Repositories: "Repositories",
};

const keyPrefix = "payHere:";

export const getFromLocalStorage = (key: string) => {
  const item =
    localStorage.getItem(`${keyPrefix}${key}`) ?? JSON.stringify(null);

  return JSON.parse(item);
};

export const setToLocalStorage = (key: string, value: unknown) => {
  localStorage.setItem(`${keyPrefix}${key}`, JSON.stringify(value));
};

export const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(`${keyPrefix}${key}`);
};
