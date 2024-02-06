import { SortOrder, TableUser, User } from "../types/usersListTypes";

// Function to filter and sort users
export const filterAndSortUsers = (
  users: User[],
  filterValue: string,
  sortOrder: SortOrder
) => {
  const usersData: TableUser[] = users.map(mapUserToTableUser);

  return usersData
    .filter((user) => {
      const includesFilterValue =
        user.tokens.toString().includes(filterValue) ||
        Object.values(user).some(
          (field) =>
            typeof field === "string" &&
            field.toLowerCase().includes(filterValue.toLowerCase())
        );

      return includesFilterValue;
    })
    .sort((a, b) => {
      const aValue = a.tokens;
      const bValue = b.tokens;

      return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
    });
};

export const mapUserToTableUser = (user: User): TableUser => {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    subscription: user.subscription.plan.type,
    tokens: user.subscription.tokens,
  };
};
