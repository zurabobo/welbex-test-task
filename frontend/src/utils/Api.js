import { API_URL } from "./config"

class Api {
  constructor({ API_URL, headers }) {
    this._API_URL = API_URL;
    this._headers = headers;
  }

  _getResData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getData() {
    return fetch(`${this._API_URL}`, {
      headers: this._headers,
    }).then(this._getResData);
  }

  getTableData() {
    return Promise.all([this.getData()]);
}


}

const api = new Api({
  API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
