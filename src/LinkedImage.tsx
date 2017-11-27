import * as React from 'react';
import A from 'fdmg-ts-react-anchor';
import Image from 'fdmg-ts-react-image';
import {MouseEvent} from 'react';

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
    public state: any;
    public props: Props;

    constructor(props: Props) {
        super(props);
        this.props = props;
        console.info('LinkedImage composition', props);
    }

    render() {
        return (
            <A href={this.props.href}
                target={this.props.target}
                className={this.props.className}
                aria-label={this.props.ariaLabel?this.props.ariaLabel:this.props.alt}
                onClick={this.props.onClick}>
                <Image src={this.props.src} alt={this.props.alt}/>
            </A>
        );
    }
}
