import gql from 'graphql-tag';

const SOIL_ANALYSIS = gql`
  mutation fileUpload($file: upload!, $folderKey: String!, $id: ID!) {
    fileUpload(file: $file, folderKey: $folderKey, id: $id)
  }
`;

export default SOIL_ANALYSIS;
