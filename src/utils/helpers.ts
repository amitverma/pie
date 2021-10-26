export const isDevelopment = () =>
  ['local', 'development'].includes(process.env.NODE_ENV);

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getFromStorage = (key: string) => {
  try {
    const value = JSON.parse(localStorage?.getItem(key) ?? '');
    return value;
  } catch (e) {
    return null;
  }
};

export const setStorage = (key: string, value: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log('Error accessing localStorage', e);
  }
};

export const deleteFromStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.log('Error accessing localStorage', e);
  }
};

export const extractString = (string) => {
  if (!string) {
    return '';
  }

  const span = document.createElement('span');
  span.innerHTML = string.replace(/<\//gi, ' </');

  return span.textContent || span.innerText;
};
