"use client";

import { LogOut } from "lucide-react";

export function SignOutButton() {
  return (
    <button
      type="button"
      disabled
      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-gray-400 dark:text-gray-500 cursor-not-allowed"
    >
      <LogOut size={16} />
      Sign out (disabled)
    </button>
  );
}
