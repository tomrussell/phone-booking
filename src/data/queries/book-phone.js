import { gql } from 'apollo-boost';

const BOOK_PHONE = gql`
  mutation BookPhone(
    $deviceName: String!,
    $user: String!,
  ) {
    bookPhone(
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

export default BOOK_PHONE;
