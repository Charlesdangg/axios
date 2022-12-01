var dataService = new DataService();

function getEle(id) {
  return document.getElementById(id);
}

function getListData() {
  //pending
  dataService
    .getListDataApi()
    .then(function (rs) {
      console.log(rs);

      renderHTML(rs.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
getListData();

function renderHTML(data) {
  var content = "";
  data.forEach(function (teacher, index) {
    content += `
    <tr>
    <td> ${index + 1}</td>
    <td> ${teacher.taiKhoan}</td>
    <td> ${teacher.matKhau}</td>
    <td> ${teacher.hoTen}</td>
    <td> ${teacher.email}</td>
    <td> ${teacher.ngonNgu}</td>
    <td> ${teacher.loaiND}</td>
    <td>
    <button class="btn btn-success" data-toggle="modal" data-target="#myModal" onclick="editUser('${
      teacher.id
    }')" >Edit</button>
    <button class="btn btn-danger" onclick="deleteTeacher('${
      teacher.id
    }')" >Delete</button>

    
    </td>

  </tr>
`;
  });
  getEle("tblDanhSachNguoiDung").innerHTML = content;
}

/**
 *
 * Thêm TK
 */

function AddUser() {
  var taiKhoan = getEle("TaiKhoan").value;
  var hoTen = getEle("HoTen").value;
  var matKhau = getEle("MatKhau").value;
  var email = getEle("Email").value;
  // var hinhAnh = getEle("HinhAnh").value;
  var loaiND = getEle("loaiNguoiDung").value;
  var ngonNgu = getEle("loaiNgonNgu").value;
  var moTa = getEle("MoTa").value;

  var data = new Data(
    "",
    taiKhoan,
    hoTen,
    matKhau,
    email,
    loaiND,
    ngonNgu,
    moTa
    // hinhAnh
  );

  dataService
    .addlistApi(data)
    .then(function (rs) {
      alert("Add User Success !");
      getListData();
      document.getElementsByClassName("close")[0].click();
    })
    .catch(function (error) {
      console.log(error);
    });
}

/**
 *
 * Edit
 */

function editUser(id) {
  var title = "Sửa tài khoản";
  document.getElementsByClassName("modal-title")[0].innerHTML = title;

  var button = `<button class="btn btn-danger" onclick="updateData(${id})"> Update</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = button;

  dataService
    .getDatabyIdApi(id)
    .then(function (rs) {
      var data = rs.data;
      getEle("TaiKhoan").value = data.taiKhoan;
      getEle("HoTen").value = data.hoTen;
      getEle("MatKhau").value = data.matKhau;
      getEle("Email").value = data.email;
      // getEle("HinhAnh").value = data.hinhAnh;
      getEle("loaiNguoiDung").value = data.loaiND;
      getEle("loaiNgonNgu").value = data.ngonNgu;
      getEle("MoTa").value = data.moTa;

      getListData();
    })
    .catch(function (error) {
      console.log(error);
    });
}

// cập nhật
function updateData(id) {
  var taiKhoan = getEle("TaiKhoan").value;
  var hoTen = getEle("HoTen").value;
  var matKhau = getEle("MatKhau").value;
  var email = getEle("Email").value;
  // var hinhAnh = getEle("HinhAnh").value;
  var ngonNgu = getEle("loaiNgonNgu").value;
  var loaiND = getEle("loaiNguoiDung").value;
  var moTa = getEle("MoTa").value;

  var data = new Data(
    id,
    taiKhoan,
    hoTen,
    matKhau,
    email,
    ngonNgu,
    loaiND,
    moTa
  );
  dataService
    .updatedatApi(data)
    .then(function (rs) {
      alert("Update Success!");
      getListData();
      document.getElementsByClassName("close")[0].click();
    })
    .catch(function (error) {
      console.log(error);
    });
}
// Delete
function deleteTeacher(id) {
  dataService
    .deleteTeacherApi(id)
    .then(function (rs) {
      alert("Delete Success!");
      getListData();
    })
    .catch(function (error) {
      console.log(error);
    });
}

getEle("btnThemNguoiDung").onclick = function () {
  var title = "Thêm tài khoản";
  document.getElementsByClassName("modal-title")[0].innerHTML = title;

  var button = `<button class="btn btn-success" onclick="AddUser()" >Add User</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = button;
};
