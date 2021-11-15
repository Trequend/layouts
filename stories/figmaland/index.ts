import './css/style.css';
import template from './html/index.handlebars';

export type FigmalandProps = {
  tagline: string;
  info: string;
  shortInfo: string;
};

export function createPage(props: FigmalandProps) {
  return template(props);
}
