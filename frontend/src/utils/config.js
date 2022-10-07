export const API_URL = 'http://localhost:5000';
// export const API_URL = 'https://welbex-testtask.herokuapp.com/';
export const columns = [
    { label: "Дата", accessor: "date_of_birth", sortable: false },
    { label: "Название", accessor: "user_name", sortable: true },
    { label: "Количество", accessor: "quantity", sortable: true },
    { label: "Расстояние", accessor: "distance", sortable: true },
  ];