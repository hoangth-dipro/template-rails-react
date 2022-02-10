const defaultOptions = {
  dataType: 'JSON'
};

class APIService {

  constructor() {
    $.ajaxSetup({
      headers: {
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
      }
    });
  }

  get(uri, body, moreOptions) {
    const options = this._constructRequest(uri, moreOptions);
    return this._connect('GET', body, options);
  }

  post(uri, body, moreOptions) {
    const options = this._constructRequest(uri, moreOptions);
    return this._connect('POST', body, options);
  }

  put(uri, body, moreOptions) {
    const options = this._constructRequest(uri, moreOptions);
    return this._connect('PUT', body, options);
  }

  delete(uri, body, moreOptions) {
    const options = this._constructRequest(uri, moreOptions);
    return this._connect('DELETE', body, options);
  }

  _constructRequest(uri, moreOptions) {
    const url = Array.prototype.concat('', uri).join(String.fromCharCode(47));
    let options = Object.assign({ url }, defaultOptions);
    if (moreOptions) {
      options = Object.assign(options, moreOptions);
    }
    return options;
  }

  _connect(method, data, options) {
    return $.ajax({
      type: method,
      ...options,
      ...{ data }
    })
  }
}

const apiService = new APIService();
export default apiService;
