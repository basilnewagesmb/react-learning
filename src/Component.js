import React, { useEffect, useState } from "react";

function Component() {
  return (
    <div>
      {[...Array(40)].map((i,l) => (
        <p key={l}>{l}</p>
      ))}
    </div>
  );
}

export default Component;
