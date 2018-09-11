import { gql } from 'apollo-boost';

const LIST_PHONES = gql`
  query ListPhones {
    phones {
      name
      available
      bookedAt
      bookedBy
      technology
      twoGBands
      threeGBands
      fourGBands  
    }
  }
`;

export default LIST_PHONES;
