import {
  ComponentWithAs,
  HTMLChakraProps,
  ThemingProps,
  chakra,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react';

interface TileProps extends HTMLChakraProps<'div'>, ThemingProps<'Tile'> {}

export const Tile: ComponentWithAs<'div', TileProps> = forwardRef(
  (props, ref) => {
    const { variant, size, children, ...rest } = props;
    const styles = useStyleConfig('Tile', { variant, size });

    return (
      <chakra.div ref={ref} {...rest} __css={styles}>
        {children}
      </chakra.div>
    );
  },
);
