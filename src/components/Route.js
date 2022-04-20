import { useEffect, useState } from "react"


const Route = ({ children, path }) => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }

        window.addEventListener('popstate', onLocationChange)

        // console.log('First Render')

        return () => {
        
            window.removeEventListener('popstate', onLocationChange)
            // console.log('Component will re-render')
        
        }

    }, []
    )

    return window.location.pathname === path ? children : null

}


export default Route