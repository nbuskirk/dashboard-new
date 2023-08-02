export const API_URL = process.env.VITE_API_SERVER;
export const API_OPTIONS = {
  headers: {
    'Content-Type': 'application/json'
  }
};
export const SESSION_URL = '/sessions';
export const SESSION_COOKIE_NAME = 'session';
export const CONFIG_URL = '/configinfo';
export const CUSTOMIZATION_URL = '/configurations/customization';
export const SYSTEM_URL = '/iesystem';
export const ALERTS_URL = '/alerts?severity=5';
