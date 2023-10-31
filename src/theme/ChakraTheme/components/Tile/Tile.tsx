import {
  HTMLChakraProps,
  ThemingProps,
  chakra,
  useStyleConfig,
} from '@chakra-ui/react';
import React from 'react';

interface TileProps extends HTMLChakraProps<'div'>, ThemingProps<'Tile'> {}

export const Tile = React.forwardRef<'div', TileProps>((props, ref) => {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig('Tile', { variant });

  return (
    <chakra.div ref={ref} {...rest} __css={styles}>
      {children}
    </chakra.div>
  );
});
