import { createContext } from 'react'

// 1. Crear el contexto
const AuthContext = createContext()

// 2. Crear el proveedor del contexto
function AuthProvider ({ children }) {
  const data = {

  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
