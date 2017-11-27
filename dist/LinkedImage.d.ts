/// <reference types="react" />
import * as React from 'react';
import { MouseEvent } from 'react';
export interface Props {
    alt: string;
    ariaLabel?: string;
    className?: string;
    href: string;
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
    src: string;
    target?: string;
}
/**
 * Renders an image wrapped in an anchor.
 */
export default class LinkedImage extends React.Component<Props, any> {
    state: any;
    props: Props;
    constructor(props: Props);
    render(): JSX.Element;
}
