import * as React from 'react';
import * as renderer from 'react-test-renderer';
import LinkedImage from "../src/LinkedImage";

console.info = function() {};

test('LinkedImage renders correctly', () => {
    let component = renderer.create(
        <LinkedImage href={'url-link'} alt={'alt-text'} className={'css-class-name'} src={'image-src'}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(
        <LinkedImage href={'url-link'} target={'new_window'} alt={'alt-text'} className={'css-class-name'} src={'image-src'}/>
    );
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(
        <LinkedImage href={'url-link'} target={'new_window'} ariaLabel={'aria-label'} alt={'alt-text'} className={'css-class-name'} src={'image-src'}/>
    );
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
