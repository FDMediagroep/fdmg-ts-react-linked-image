[![Build Status](https://travis-ci.org/FDMediagroep/fdmg-ts-react-linked-image.svg?branch=master)](https://travis-ci.org/FDMediagroep/fdmg-ts-react-linked-image)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fdmg-ts-react-linked-image/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fdmg-ts-react-linked-image?branch=master)

[![npm version](https://badge.fury.io/js/fdmg-ts-react-linked-image.svg)](https://badge.fury.io/js/fdmg-ts-react-linked-image)

# fdmg-ts-react-linked-image
[ReactJS](https://reactjs.org/) LinkedImage component. This component renders an image with a link.

## Installation
- Run `npm i --save-dev fdmg-ts-react-linked-image`

or

- Run `yarn add fdmg-ts-react-linked-image --dev`

## Usage
### TypeScript
```
import * as React from 'react';
import LinkedImage from 'fdmg-ts-react-linked-image';

export default class foo {
    public state: any;
    public props: any;

    constructor(props: any) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <LinkedImage
                className="css-class-name"
                target="newWindow"
                src={'image.png'}
                href={'https://fd.nl'}
                alt="FD.nl logo"
            />
        );
    }
}
```

### Resulting HTML
```
<a href="https://fd.nl" target="newWindow" class="css-class-name">
    <img src="image.png" alt="FD.nl logo"/>
</a>

```
