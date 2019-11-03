import {createUploadLink} from 'apollo-upload-client';

const uploadLink = createUploadLink({
  uri: 'http://157.245.216.23/graphql',
  credentials: 'include'
});

export default uploadLink;
