# Test Routes in React App

This is just a small app where it just test route being separated in different file for better organization.

Separating the routes cna help by making the files cleaner and organized when creating multiple routes under the same endpoints or file structure.

## Example of a a separated file
```
export const useAuthRoutes = () => {
    return (
        <>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
        </>
    )   
}; 
```

## Calling the file
```
// App.tsx

import { useAuthRoutes } from './Auth/index'; // Import the index route file
import Home from './Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {useAuthRoutes()} // Call the function.
      </Routes>
    </Router>
  )
}
```