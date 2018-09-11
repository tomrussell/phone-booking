import React from 'react';
import { Redirect } from 'react-router-dom';

import {
  OidcContainer,
  LoginPage,
  LogoutPage,
  CallBackPage,
  SilentRenewPage,
} from '../pages/oidc';
import ProjectsPage from '../pages/projects/ProjectsPage';

const routes = [
  {
    path: '/',
    component: () => <Redirect to='/projects' />,
    exact: true,
  },
  {
    path: '/projects',
    component: ProjectsPage,
    exact: true,
    isProtected: false,
  },
  {
    path: '/oidc',
    component: OidcContainer,
    breadcrumb: null,
    protected: false,
    routes: [
      {
        path: '/oidc/login',
        component: LoginPage,
        breadcrumb: null,
        protected: false,
      },
      {
        path: '/oidc/logout',
        component: LogoutPage,
        breadcrumb: null,
        protected: false,
      },
      {
        path: '/oidc/callback',
        component: CallBackPage,
        breadcrumb: null,
        protected: false,
      },
      {
        path: '/oidc/silent-renew',
        component: SilentRenewPage,
        breadcrumb: null,
        protected: false,
      },
    ],
  },
];

export default routes;
