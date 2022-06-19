import React, { useState } from "react";

import Clock from "./Clock";

function App() {
  const [showClock, setShowClock] = useState(true);

  return (
    <div>
      <button onClick={() => setShowClock(!showClock)}>Toggle Clock</button>
      {showClock ? <Clock /> : null}
    </div>
  );
}

export default App;
