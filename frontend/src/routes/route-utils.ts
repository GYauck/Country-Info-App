import { ComponentType, createElement, lazy } from 'react';

export function getNavigatePath<P>(route: string, parameters?: P): string {
  let path = route;
  if (parameters) {
    const paramNames: (keyof P)[] = Object.keys(parameters) as (keyof P)[];
    paramNames.forEach((name) => {
      path = path.replace(`:${name.toString()}`, `${parameters[name]}`);
    });
  }
  return path;
}

export const lazyComponentLoader = <T extends ComponentType<T>>(
  load: Promise<{ default: T }>,
): JSX.Element => {
  return createElement(lazy(() => load));
};
