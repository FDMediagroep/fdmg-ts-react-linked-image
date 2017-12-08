import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';

import * as React from 'react';
import * as renderer from 'react-test-renderer';
import LinkedImage from "../src/LinkedImage";

console.info = () => {};

describe('LinkedImage', () => {
    beforeAll(() => {
        Enzyme.configure({ adapter: new Adapter() });
    });

    test('renders correctly', () => {
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

    test('onClick callback handling', () => {
        const spy = jest.fn();
        const component = mount(
            <LinkedImage href="fd.nl" onClick={spy} alt={"alt-text"} src={'test.png'} className={'css-class-name'}/>
        );

        component.simulate('click');
        expect(spy).toHaveBeenCalled();
    });
});
