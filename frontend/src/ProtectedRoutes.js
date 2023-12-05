const { Navigate } = require("react-router-dom")

const ProtectedRoutes = ({isAuthenticated, children}) => {

    if(!isAuthenticated) {
        return <Navigate to="/login" replace={true} />
    }
    return (
        <>
            {children}
        </>
    )
}

export default ProtectedRoutes;