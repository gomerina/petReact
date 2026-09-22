import { createContext, useContext } from 'react'

const TogglerContext = createContext(null)

export function useTogglerContext() {
    return useContext(TogglerContext)
}

export default TogglerContext
