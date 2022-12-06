export const TABLE_API_URL = 'https://welbex-test-task.onrender.com';
export const columns = [
    { label: "Дата", accessor: "date_of_birth", sortable: false },
    { label: "Название", accessor: "user_name", sortable: true, sortbyOrder: "desc" },
    { label: "Количество", accessor: "quantity", sortable: true },
    { label: "Расстояние", accessor: "distance", sortable: true },
  ];