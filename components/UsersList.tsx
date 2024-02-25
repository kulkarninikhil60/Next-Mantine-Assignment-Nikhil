"use client";

import React from 'react';

// Mantine UI
import { SimpleGrid } from '@mantine/core';

// Local Components
import { ContactCard } from './ContactCard';

// Interfaces
import { User } from '../interfaces/User';


interface UserListProps {
  users: User[]
}

export const UsersList = (props: UserListProps) => {
  // States
  const [users, setUsers] = React.useState(props.users);

  // Event Handlers
  const deleteUserHandler = (userId: number) => {
    setUsers(users.filter((user) => user.id !== userId));
  }

  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 4 }}
      style={{ margin: 'var(--mantine-spacing-lg)' }}
    >
      {users.map((user) => {
        return (
          <ContactCard
            key={user.id}
            userInfo={{
              id: user.id,
              name: user.name,
              email: user.email,
              phone: user.phone,
              website: user.website
            }}
            deleteUserCallback={deleteUserHandler}
          />
        )
      })}
    </SimpleGrid>
  );
};
