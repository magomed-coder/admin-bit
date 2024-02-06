import UserDetails from "../widgets/user-transactions";
import UsersList from "../widgets/users-list";

const AdminPanel: React.FC = () => {
  return (
    <>
      <UsersList />
      <UserDetails />
    </>
  );
};

export default AdminPanel;
