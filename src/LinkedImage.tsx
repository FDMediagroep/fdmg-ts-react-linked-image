import * as React from 'react';

/**
 * Renders an image wrapped in an anchor.
 */
export default class LinkedImage extends React.Component {
    public state: any;
    public props: any;

    constructor(props: any) {
        super(props);
        this.props = props;
        console.info('LinkedImage component', props);
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
               className={this.props.className}>
                <img src={this.props.src} alt={this.props.alt}/>
            </a>
        );
    }
}
