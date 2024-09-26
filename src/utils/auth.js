export const isAuthenticated = () => {
  return typeof window !== 'undefined' && window.localStorage.getItem('isAuthenticated') === 'true';
};

export const login = (username, password) => {
  if (username === "user" && password === "password") {
    window.localStorage.setItem('isAuthenticated', 'true');
    return true;
  }
  return false;
};

export const logout = () => {
  window.localStorage.removeItem('isAuthenticated');
};
