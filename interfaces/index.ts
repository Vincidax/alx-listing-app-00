export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price?: string;
  rating?: number;
  isSuperhost?: boolean;
}
export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}