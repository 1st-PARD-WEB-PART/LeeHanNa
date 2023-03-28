// "react-router-dom" 라이브러리에서 "useParams" 훅을 import
import { useParams } from 'react-router-dom';

// 사용자 정보를 담은 객체
const data = {
  Kyj: {
    name: '김유진',
    description: '파드의 웹파트 파트장',
    image: 'https://post-phinf.pstatic.net/MjAxOTExMDRfMjg2/MDAxNTcyODU1MzI0MTM1.iPvZ0FpnvYf6mtjiSYdDQ281lrN8GTFiuVpNm1YV3ksg.tURPn5-DATUzis_UNoc8zLqunWbd56t6MOpeeO2ZSDYg.JPEG/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C_%285%29.jpg?type=w1200',
  },
  Lhn: {
    name: '이한나',
    description: '파드의 웹 개발 파트',
    image: 'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/32E9/image/BA2Qyx3O2oTyEOsXe2ZtE8cRqGk.JPG',
  }
};

// 프로필 정보를 표시하는 컴포넌트입니다.
function Profile() {
  // "useParams" 훅을 사용하여 URL에서 전달된 username 파라미터를 가져옴
  const params = useParams();
  // username 파라미터에 해당하는 사용자 정보를 "data" 객체에서 가져옴
  const profile = data[params.username];
  //const {username} = userParams(); //대괄호 안에는 username배열을 가져옴 (name, description과 같은 제목의 부연 설명들)
  // 사용자 정보가 존재하면 해당 정보를 화면에 표시, 그렇지 않으면 존재하지 않는 프로필임을 알리는 메시지를 표시
  //이미지 크기는 3:2비율이 잘 어울리는 것 같아 300,200으로 설정
  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
          <img src = {profile.image} width="300px" height="200px" alt="이미지"></img>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
  //어떻게 전달하느냐 => Home.js안에서 /profiles/Pjk이렇게 전달해줌. / 홈에서 사용자 경로 받음
};

// Profile 컴포넌트를 모듈의 기본 내보내기(default export)로 내보냄
export default Profile;