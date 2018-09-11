import React from 'react';
import Helmet from 'react-helmet';

import UserAwareRoute from '../../layout/components/UserAwareRoute';
import MainContainer from '../../layout/containers/MainContainer';

const OidcContainer = ({ routes }) => (
  <MainContainer header={false}>
    <Helmet title='Authentication' />
    {
      routes.map(route => <UserAwareRoute key={route.path} {...route} />)
    }
  </MainContainer>
);

export default OidcContainer;
