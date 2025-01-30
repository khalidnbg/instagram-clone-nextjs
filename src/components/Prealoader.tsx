"use client";

import { ScaleLoader, SyncLoader } from "react-spinners";

export default function Preloader() {
  return <SyncLoader loading={true} speedMultiplier={3} />;
}
