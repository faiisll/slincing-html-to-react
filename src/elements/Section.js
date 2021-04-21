import React from 'react'
import propTypes from 'prop-types';

export default function Section(props) {
    const className = ['section'];
    className.push(props.className);

    if(props.isCenterContent) className.push('center-content')
    return (
        <section className={className.join(" ")}>
            {props.children}
        </section>
    )
}

Section.prototype = {
    isCenterContent: propTypes.bool,
    className: propTypes.string
}
