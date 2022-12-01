function DataService() {
  this.getListDataApi = function () {
    return axios({
      url: "https://6385f93ebeaa6458266eedd6.mockapi.io/api/Data",
      method: "GET",
    });
  };

  this.deleteTeacherApi = function (id) {
    return axios({
      url: `https://6385f93ebeaa6458266eedd6.mockapi.io/api/Data/${id}`,
      method: "DELETE",
    });
  };

  this.addlistApi = function (data) {
    return axios({
      url: "https://6385f93ebeaa6458266eedd6.mockapi.io/api/Data",
      method: "POST",
      data: data,
    });
  };
  this.getDatabyIdApi = function (id) {
    return axios({
      url: `https://6385f93ebeaa6458266eedd6.mockapi.io/api/Data/${id}`,
      method: "GET",
    });
  };
  this.updatedatApi = function (data) {
    return axios({
      url: `https://6385f93ebeaa6458266eedd6.mockapi.io/api/Data/${data.id}`,
      method: "PUT",
      data: data,
    });
  };
}
