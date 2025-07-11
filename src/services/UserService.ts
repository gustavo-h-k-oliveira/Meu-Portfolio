type User = {
  id: number;
  name: string;
};

const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

export const getAllUsers = (): User[] => {
  return users;
};
