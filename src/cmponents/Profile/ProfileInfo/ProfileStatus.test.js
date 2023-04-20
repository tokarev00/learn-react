import React from "react";
import { create } from "react-test-renderer"
import ProfileStatus from "./ProfileStatus";

describe( "ProfileStatus component", () => {
    test('status from props should be in the state',
        () => {
            const component = create(<ProfileStatus status='test'/>);
            const instance = component.getInstance();
            expect(instance.state.status).toBe('test');
        }
    )
    test('after creation span should be displayed with correct status',
        () => {
            const component = create(<ProfileStatus status='test'/>);
            const instance = component.root;
            let span = instance.findByType('span');
            expect(span).not.toBeNull();
        }
    )
    test('after creation span should be displayed with correct status',
        () => {
            const component = create(<ProfileStatus status='test'/>);
            const instance = component.root;
            let span = instance.findByType('span');
            expect(span.children[0]).toBe('test');
        }
    )
    test('after creation input should not be displayed',
        () => {
            const component = create(<ProfileStatus status='test'/>);
            const instance = component.root;
            expect(() => {
                let input = instance.findByType('input');
            }).toThrow();
        }
    )
    test('input should be displayed in editMode instead of span',
        () => {
            const component = create(<ProfileStatus status='test'/>);
            const instance = component.root;
            const span = instance.findByType('span');
            span.props.onDoubleClick();
            const input = instance.findByType('input');
            expect(input).not.toBeNull();
        }
    )
    test('callback should be called', () => {
        const mockCallBack =  jest.fn()
        const component = create(<ProfileStatus status='test' updateUserStatus={mockCallBack}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallBack.mock.calls.length).toBe(1)
    })
    }
)