export type Contact = {
  name: {
    first: string;
    last: string;
  };
  login: {
    uuid: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};
