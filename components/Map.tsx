import { Children } from 'react';

export const Map = ({render, of}: any) =>
    Children.toArray(of.map((item: any, index: number) => render(item, index)));