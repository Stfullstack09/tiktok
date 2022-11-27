import React from 'react';
import $ from 'jquery';

function useIntoView(elem) {
    console.log('check ele :', elem);

    if (!elem) {
        return;
    }

    const docViewTop = $(window).scrollTop();
    const docViewBottom = docViewTop + $(window).height();

    const elemTop = $(elem).offset().top;
    const elemBottom = elemTop + $(elem).height();

    return elemBottom <= docViewBottom && elemTop <= docViewTop;
}

export default useIntoView;
