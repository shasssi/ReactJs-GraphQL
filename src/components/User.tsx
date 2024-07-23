import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { GET_ALL_USERS } from "../graphql/queries/user";

const UserComponent = () => {
  const [fetchAllUsers, { data, loading, error }] = useMutation(GET_ALL_USERS);

  useEffect(() => {
    fetchAllUsers().catch((err) => {});
  }, []);

  return (
    <div>
      {data?.fetchAllUsers.map((user: any) => (
        <div key={user?.id}>
          {user?.name} - {user?.email}
        </div>
      ))}
    </div>
  );
};

export default UserComponent;
