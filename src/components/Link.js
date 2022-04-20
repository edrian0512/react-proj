import React from 'react'

const Link = ({ href, children }) => {

    const onClick = (e) => {
        e.preventDefault();
        window.history.pushState({}, '', href)

        const headerEvent = new PopStateEvent('popstate');
        window.dispatchEvent(headerEvent);
    }

    return (
        <a onClick={onClick} href={href}>{children}</a>
    )
}



export default Link