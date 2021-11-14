declare module '*.handlebars' {
  const template: (variables: Record<string, any>) => string;
  export default template;
}

declare module '*.mdx' {
  const content: any;
  export default content;
}
