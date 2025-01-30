"use client";

import { SyncLoader } from "react-spinners";

export default function Preloader() {
  return (
    <div>
      <SyncLoader loading={true} speedMultiplier={3} />
    </div>
  );
}
