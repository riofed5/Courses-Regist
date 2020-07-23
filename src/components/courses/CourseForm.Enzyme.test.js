import React from "react";
import CourseForm from "./CourseForm";
import {shallow} from "enzyme";
import {isTaggedTemplateExpression} from "@babel/types";

const renderCourseForm = (args) => {
    const defaultProps = {
        authors: [],
        course: {},
        saving: false,
        errors: {},
        onSave: () => {},
        onChange: () => {}
    };
    const props = {...defaultProps, ...args};
    return shallow(<CourseForm {...props} />);
}

it('render form and header', () => {
    const wrapper = renderCourseForm();

    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h2').text()).toBe('Add Course');
})

it('labels save buttons as "Save" when not saving', () => {
    const wrapper = renderCourseForm();
    expect(wrapper.find("button").text()).toBe("Save");
});

it('labels save buttons as "Saving..." when  saving', () => {
    const wrapper = renderCourseForm({saving: true});
    expect(wrapper.find("button").text()).toBe("Saving...");
});