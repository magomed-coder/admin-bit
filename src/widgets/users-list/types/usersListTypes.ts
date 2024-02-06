enum PlanType {
  BASIC = "BASIC",
  ELITE = "ELITE",
  FREE = "FREE",
  PREMIUM = "PREMIUM",
}

enum Currency {
  RUB = "RUB",
  USD = "USD",
}

enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}

interface Plan {
  id: string;
  tokens: number;
  price: number;
  type: PlanType;
  currency: Currency;
}

interface Subscription {
  id: string;
  additional_tokens: number;
  plan_id: string;
  tokens: number;
  user_id: string;
  created_at: Date;
  plan: Plan;
}

export interface User {
  id: string;
  role: UserRole;
  email: string;
  tg_id: string | null;
  name: string;
  avatar: string | null;
  tokens: number;
  created_at: Date;
  subscription: Subscription;
}

export interface UsersListState {
  users: User[];
  pages: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface TableUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  subscription: PlanType;
  tokens: number;
}

export type SortOrder = "asc" | "desc";
