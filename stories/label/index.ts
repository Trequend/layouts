import './index.css';
import template from './index.handlebars';

export type LabelProps = {
  firstName: string;
  lastName: string;
};

export function createLabel(props: LabelProps) {
  return template(props);
}
