import { Flex, HTMLChakraProps, Skeleton } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useLoading } from 'lib/core/loading-provider';
import { CardTitle } from './card-title';
import { CardDescription } from './card-description';

type CardContentProps = HTMLChakraProps<'div'> & {
  title: string;
  description: string;
  badge: ReactNode;
};

export const CardContent = (props: CardContentProps) => {
  const loading = useLoading();

  return (
    <Flex direction="row" gap="1rem" {...props}>
      <Flex flex={1} direction="column" gap="0.75rem" pb="1rem">
        <Skeleton isLoaded={!loading} width={loading ? '50%' : ''}>
          <CardTitle>{props.title}</CardTitle>
        </Skeleton>
        <Skeleton isLoaded={!loading}>
          <CardDescription>{props.description}</CardDescription>
        </Skeleton>
      </Flex>
      {props.badge}
    </Flex>
  );
};
