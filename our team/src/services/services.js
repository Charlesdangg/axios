function DataService() {
  this.getListDataApi = function () {
    var promise = axios({
      url: "https://6385f93ebeaa6458266eedd6.mockapi.io/api/Data",
      method: "GET",
    });
    return promise;
  };
}
