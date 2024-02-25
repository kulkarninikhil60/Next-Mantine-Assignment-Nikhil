"use client";

import React from 'react';
import Link from 'next/link'

// Mantine UI
import { Avatar, Text, Paper } from '@mantine/core';
import { Group, Button } from '@mantine/core';
import { SimpleGrid, Tooltip } from '@mantine/core';

// Icons
import { IconUserPlus } from '@tabler/icons-react';
import { IconUserMinus } from '@tabler/icons-react';
import { IconTrash } from '@tabler/icons-react';
import { IconPhoneCall } from '@tabler/icons-react';
import { IconWorld } from '@tabler/icons-react';
import { IconAt } from '@tabler/icons-react';
import { IconStar } from '@tabler/icons-react';

// Interface
import { User } from '../interfaces/User';


interface ContactCardProps {
  userInfo: User
  deleteUserCallback: (userId: number) => void;
}

const avatarFetchUrl = `https://api.dicebear.com/7.x/initials/svg?seed=`


export const ContactCard = (props: ContactCardProps) => {

  const { userInfo, deleteUserCallback } = props;

  // States
  const [isFollowed, setIsFollowed] = React.useState(false)

  // Event Handlers
  const followUserHandler = () => {
    setIsFollowed(!isFollowed)
  }

  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      bg="var(--mantine-color-body)"
      shadow="var(--mantine-shadow-md)"
    >
      <Link
        href={`https://${userInfo.website}`}
      >
        <Tooltip
          label={userInfo.name}
          arrowOffset={25} 
          arrowSize={4}
          withArrow 
        >
        <Avatar
          src={`${avatarFetchUrl}${userInfo.name}`}
          size={120}
          radius={120}
          alt={"Jane Fingerlicker"}
          mx="auto"
        />
        </Tooltip>
      </Link>

      <Group
        mt="md"
        align='center'
        justify='center'
        gap={4}
      >
        <Text ta="center" fz="lg" fw={500}>
          {userInfo.name}
        </Text>
        {isFollowed ? <IconStar size={16} /> : null}
      </Group>

      <Group
        mt="xs"
        align='center'
        gap={4}
      >
        <IconAt size={16} color='var(--mantine-color-dimmed)' />
        <Link
          href={`mailto:${userInfo.email}`}
          target='_blank'
          style={{
            textDecoration: 'none',
            color: 'var(--mantine-color-dimmed)',
            fontSize: 'var(--mantine-font-size-md)',
          }}
        >
          {userInfo.website}
        </Link>
      </Group>

      <Group
        mt={4}
        align='center'
        gap={4}
      >
        <IconPhoneCall size={16} color='var(--mantine-color-dimmed)' />
        <Link
          href={`tel:${userInfo.phone}`}
          target='_blank'
          style={{
            textDecoration: 'none',
            color: 'var(--mantine-color-dimmed)',
            fontSize: 'var(--mantine-font-size-md)',
          }}
        >
          {userInfo.phone}
        </Link>
      </Group>


      <Group
        mt={4}
        align='center'
        gap={4}
      >
        <IconWorld size={16} color='var(--mantine-color-dimmed)' />
        <Link
          href={`https://${userInfo.website}`}
          target='_blank'
          style={{
            textDecoration: 'none',
            color: 'var(--mantine-color-dimmed)',
            fontSize: 'var(--mantine-font-size-md)',
          }}
        >
          {userInfo.website}
        </Link>
      </Group>


      <SimpleGrid
        cols={2}
        spacing={4}
        mt={16}
      >
        <Button
          variant={isFollowed ? "outline" : "filled"}
          color={isFollowed ? "#212529" : ""}
          leftSection={
            isFollowed
              ? <IconUserMinus size={16} color='#212529' />
              : <IconUserPlus size={16} />
          }
          onClick={followUserHandler}
        >
          {isFollowed ? 'Unfollow' : 'Follow'}
        </Button>
        <Button
          variant="outline"
          leftSection={<IconTrash size={16} />}
          onClick={() => deleteUserCallback(userInfo.id)}
        >
          Delete
        </Button>
      </SimpleGrid>
    </Paper>
  )
}