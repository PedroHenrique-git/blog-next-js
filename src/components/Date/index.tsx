import { formatDate } from '../../utils/format-date';
import { Container } from './styles';

export type DateProps = {
  date: string;
};

export default function Date({ date }: DateProps) {
  return <Container>{formatDate(date)}</Container>;
}
