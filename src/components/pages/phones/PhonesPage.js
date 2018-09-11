import React from 'react';
import { Query } from 'react-apollo';
import { LIST_PHONES } from '../../../data/queries';

import { LoadingResults } from '../../shared';
import PhonesList from './PhonesList';

const ProjectsPage = () => (
  <Query query={LIST_PHONES}>
    {
      (({ loading, error, data: { phones } = {} }) => (
        <LoadingResults loading={loading} error={error}>
          <PhonesList phones={phones} />
        </LoadingResults>
      ))
    }
  </Query>
);

export default ProjectsPage;
