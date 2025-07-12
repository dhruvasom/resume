import { useState } from 'react'
import './App.css'
import UserProfileHeader from "./UserProfileHeader";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-4">
      <UserProfileHeader
        name="Jane Doe"
        profilePic="https://randomuser.me/api/portraits/women/68.jpg"
        email="jane.doe@example.com"
        phone="+1-555-123-4567"
        linkedin="https://linkedin.com/in/janedoe"
        github="https://github.com/janedoe"
      />
    </div>
  )
}

export default App
