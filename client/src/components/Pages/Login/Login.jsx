/* eslint-disable react-hooks/exhaustive-deps */
/* Third Party Components */
import { useEffect, useState } from 'react';

/* Constants */
import {
  API_URL,
  SESSION_URL,
  CONFIG_URL,
  SYSTEM_URL,
  CUSTOMIZATION_URL,
  API_OPTIONS
} from '../../../helpers/constants';

/* Hooks */
import { useStore } from '../../../hooks/useStore';
import { useAuth } from '../../AuthProvider/AuthProvider';
import { usePostContent } from '../../../hooks/useAPI';

const Login = () => {
  /* Internal States */
  const [formData, setFormData] = useState({ user_name: null, password: null });

  /* Hooks */
  const { login } = useAuth();
  const { setSession } = useStore();

  const sessionid = useStore((state) => state.sessionid);

  const loginURL = `${API_URL}${SESSION_URL}`;
  const configURL = `${API_URL}${CONFIG_URL}`;
  const systemURL = `${API_URL}${SYSTEM_URL}`;
  const customizationsURL = `${API_URL}${CUSTOMIZATION_URL}`;

  const loginOptions = {
    body: JSON.stringify(formData),
    method: 'POST',
    headers: {
      ...API_OPTIONS.headers
    }
  };
  const configOptions = {
    method: 'GET',
    headers: {
      ...API_OPTIONS.headers,
      sessionid
    }
  };

  const loginRequest = usePostContent(loginURL, loginOptions, false);
  const configRequest = usePostContent(configURL, configOptions, false);
  const systemRequest = usePostContent(systemURL, configOptions, false, 10000);
  const customizationRequest = usePostContent(
    customizationsURL,
    configOptions,
    false
  );

  const doLogin = (e) => {
    e.preventDefault();
    loginRequest.fetchContent();
  };

  useEffect(() => {
    /* 
      If we have content from the login request, update the store 
    */
    if (loginRequest.content?.sessionid)
      setSession(loginRequest.content.sessionid);
  }, [loginRequest.content, setSession]);

  useEffect(() => {
    /* 
      If configOptions gets updated from setting a sessionid in the store
      Run the configRequest with the new options
      Update the store (login)
    */
    if (configOptions.headers.sessionid) {
      configRequest.fetchContent(); // if we have a sessionid, fetch config
      systemRequest.fetchContent(); // if we have a sessionid, fetch iesystem
      customizationRequest.fetchContent(); // if we have a sessionid, fetch customizations
    }
  }, [sessionid]);

  useEffect(() => {
    /* If we have all required data, update store and redirect to login */
    if (
      customizationRequest.content &&
      configRequest.content &&
      systemRequest.content &&
      sessionid
    )
      login(
        formData.user_name,
        sessionid,
        configRequest.content,
        systemRequest.content,
        customizationRequest.content
      );
  }, [
    customizationRequest.content,
    configRequest.content,
    systemRequest.content,
    sessionid
  ]);

  return (
    <div className='LoginForm'>
      <p>Login Form</p>
      <form onSubmit={doLogin}>
        <input
          name='username'
          onChange={(e) => {
            setFormData({ ...formData, user_name: e.target.value });
          }}
        />
        <input
          name='password'
          type='password'
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
        />
        <button type='submit'>submit</button>
        <p>Login Status: {loginRequest.status}</p>
        <p>Login Result: {JSON.stringify(loginRequest?.content)}</p>
        <p>Configuration Status: {configRequest.status}</p>
        <p>Configuration Result: {JSON.stringify(configRequest?.content)}</p>
        <p>System Status: {systemRequest.status}</p>
        <p>System Result: {JSON.stringify(systemRequest?.content)}</p>
        <p>Customization Status: {customizationRequest.status}</p>
        <p>
          Customization Result: {JSON.stringify(customizationRequest?.content)}
        </p>
      </form>
    </div>
  );
};

export default Login;
