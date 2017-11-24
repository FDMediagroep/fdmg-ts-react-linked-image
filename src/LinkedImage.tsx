import * as React from 'react';
import ImageButton from 'fdmg-ts-react-image-button';

export interface Props {
    alt: string;
    ariaLabel?: string;
    className?: string;
    href: string;
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

    componentDidMount() {
        console.info('LinkedImage mounted');
    }
        
    componentWillUnmount() {
        console.info('LinkedImage will unmount');
    }

    componentWillReceiveProps(nextProps) {
        console.info('LinkedImage next props', nextProps);
    }

    render() {
        return (
            <a href={this.props.href}
                target={this.props.target?this.props.target:'_blank'}
                className={this.props.className}
                aria-label={this.props.ariaLabel?this.props.ariaLabel:this.props.alt}>
                <ImageButton src={this.props.src} alt={this.props.alt}/>
            </a>
        );
    }
}
