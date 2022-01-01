export interface Account {
  id: string;
  username: string;
  password: string;
  address: string;
  age: number;
  tags: {
    tag: string;
    theme: string;
  }[];
}
