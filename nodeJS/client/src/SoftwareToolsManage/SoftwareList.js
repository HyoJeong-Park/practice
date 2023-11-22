const { response } = require("express")

function SoftwareList () {
  componentDidMount()
  {
    this.callSwToolListApi();
  }

  callSwToolListApi = async () => {
    axios.post('/api/Swtool?type=list', {
    })
    .then (response => {
      try {
        this.setState({responseSwtoolList: response});
        this.setState({
          append_SwtoolList: this.callSwToolListAppend()
        });
      }catch (error) {
        alert('작업 중 에러가 발생했습니다.');
      }
    })
    .catch(error => {alert('작업 중 에러가 발생했습니다.'); return false});
  }

  callSwToolListAppend = () => {
    let result = [];
    var SwToolList = this.state.responseSwtoolList.data

    for(let i = 0; i < SwToolList.json.length; i++){
      var data = SwToolList.json[i];

      var date = data.reg_date
      var year = data.substr(0, 4)
      var month = data.substr(4, 2)
      var day = data.substr(6, 2)
      var reg_date = year + '.' +month+ '.'+day

      result.push(
        <tr class="hidden_type">
          <td>{data.swt_toolname}</td>
          <td>{data.swt_function}</td>
          <td>{reg_date}</td>
          <td>
            <Link to={'/AdminSoftwareView/'+data.swt_code}
            className="bt_c1 bt c2 w50_b">수정</Link>
            <a href='#n' class='bt_c1 w50_b'>삭제</a>
          </td>
        </tr>
      )
    }
    return result;
  }

  return (
    <section class='sub_wrap'>
      <article>
        <div>
          <table>
            <tr>
              <th>툴 이름</th>
              <th>기능</th>
              <th>등록일</th>
              <th>기능</th>
            </tr>
          </table>
          <table>
            {this.state.append_SwtoolList}
          </table>
        </div>
      </article>
    </section>
  );
}

export default SoftwareList;