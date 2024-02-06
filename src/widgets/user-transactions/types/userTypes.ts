import { TableUser } from "../../users-list/types/usersListTypes";

enum Currency {
  RUB = "RUB",
  USD = "USD",
  SYSTEM_TOKEN = "SYSTEM_TOKEN",
}

export enum ActionType {
  REPLENISH = "REPLENISH",
  WRITE_OFF = "WRITE_OFF",
  // SUBSCRIPTION = "SUBSCRIPTION",
}

export interface UserTransaction {
  id: string;
  provider: "SYSTEM";
  currency: Currency;
  meta: object | null;
  amount: number;
  status: "PENDING" | "SUCCEDED" | "FAILED";
  type: ActionType;
  plan_id: string | null;
  user_id: string;
  referral_id: string | null;
  external_id: string | null;
  created_at: string;
}

export interface UserTransactionState {
  userTransactions: UserTransaction[] | null;
  selectedUser: TableUser | null;
  isUserDetailsOpen: boolean;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
