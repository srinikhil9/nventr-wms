import "server-only";

import { ALL_PERMISSIONS } from "./permissions";

export type AuthContext = {
  userId: string;
  email: string;
  fullName: string;
  nickname: string | null;
  hiddenNavPaths: string[];
  roleNames: string[];
  permissions: Set<string>;
  warehouseIds: string[];
};

const DEMO_CTX: AuthContext = {
  userId: "demo-user",
  email: "demo@nventr.io",
  fullName: "Demo User",
  nickname: null,
  hiddenNavPaths: [],
  roleNames: ["admin"],
  permissions: new Set(ALL_PERMISSIONS),
  warehouseIds: [],
};

export async function getAuthContext(): Promise<AuthContext | null> {
  return DEMO_CTX;
}

export function canAccessWarehouse(_ctx: AuthContext, _warehouseId: string): boolean {
  return true;
}

export async function requirePermission(_permission: string): Promise<AuthContext> {
  return DEMO_CTX;
}

export async function requireAuth(): Promise<AuthContext> {
  return DEMO_CTX;
}
