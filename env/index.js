export const localApiUrl = 'http://localhost:8000/api';
export const prodApiUrl = '/api';

export const isLocal = process.env.NODE_ENV === 'development';

export function getBaseApiUrl() {
  return isLocal ? localApiUrl : prodApiUrl;
}
