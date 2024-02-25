import { UsersList } from '../components/UsersList';
import { User } from '../interfaces/User';

const HomePage = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await response.json();

  return (
    <UsersList users={users} />
  );
};

export default HomePage;
