import { useParams } from 'react-router-dom';

function Article() {
  const { id } = useParams(); //useParams에 (map)의 title을 저장하기 위한 중괄호
  return (
    <div>
      <h2>게시글 {id}</h2>
    </div>
  );
};

export default Article;