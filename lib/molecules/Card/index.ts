export * from './theme';
import { Card as InternalCard } from './card';
export type { CardProps } from './card';
import { CardBadge } from './card-badge';
export type { CardBadgeProps } from './card-badge';
import { CardContent } from './card-content';
export type { CardContentProps } from './card-content';
import { CardButton } from './card-button';
export type { CardButtonProps } from './card-button';

type InternalCardType = typeof InternalCard;
export interface ICard extends InternalCardType {
  Content: typeof CardContent;
  Badge: typeof CardBadge;
  Button: typeof CardButton;
}

export const Card = InternalCard as ICard;
Card.Badge = CardBadge;
Card.Content = CardContent;
Card.Button = CardButton;
