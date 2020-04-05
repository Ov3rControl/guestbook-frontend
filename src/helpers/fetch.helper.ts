export const fetchHelper = async (
  path: string,
  reqType: string,
  body: object = {}
): Promise<any> => {
  const data = Object.entries(body)
    .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
    .join('&');
  return fetch(process.env.REACT_APP_DOMAIN + path, {
    method: reqType,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data,
  });
};
