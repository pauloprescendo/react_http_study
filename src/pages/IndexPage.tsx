import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import User from "../models/User";
import api from "../services/api";
import Menu from '../components/menu';

import styles from '../styles/index-page.module.css'

const columns = [
  {
    name: "Nome",
    selector: "name",
    sortable: true,
  },
  {
    name: "Documento",
    selector: "document",
    sortable: true,
  },
  {
    name: "ID Conta",
    selector: "account_id",
    sortable: true,
  },
  {
    name: "ID Pessoa",
    selector: "person_id",
    sortable: true,
  },
];

const IndexPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api.get<User[]>("/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <>
      <Menu />
      <div className={styles.principal}>
        <DataTable
          title="Usuários"
          columns={columns}
          data={users}
          pagination
          paginationPerPage={5}
          paginationRowsPerPageOptions={[5, 10, 25, 50]}
        />
      </div>
    </>
  );
};

export default IndexPage;
