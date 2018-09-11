import { gql } from 'apollo-boost';

const RETURN_PHONE = gql`
  mutation ReturnPhone(
    $deviceName: String!,
    $user: String!,
  ) {
    returnPhone(
      input: {
        deviceName: $deviceName,
        user: $user,
      }
    ) {
      name
      available
      bookedAt
      bookedBy
    }
  }
`;

export default RETURN_PHONE;
