import { Navigate } from 'react-router-dom';

function MyPage() {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />; //Navigate는 뒤로가기가 안됨
  }

  return <div>마이 페이지</div>;
};

export default MyPage;