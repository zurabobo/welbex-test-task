import { TABLE_API_URL } from "./config"

class TableApi {
  constructor({ TABLE_API_URL, headers }) {
    this._TABLE_API_URL = TABLE_API_URL;
    this._headers = headers;
  }

  _getResData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getData() {
    return fetch(`${this._TABLE_API_URL}`, {
      headers: this._headers,
    }).then(this._getResData);
  }

  getAppData() {
    return Promise.all([this.getData()]);
}


}

const tableApi = new TableApi({
  TABLE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default tableApi;
