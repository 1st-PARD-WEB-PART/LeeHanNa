import logo from './logo.svg';
import './App.css';

//component의 렌더링 결과가 상태에 따라 변경될 수 있도록 

function Label(props){ //입력 필드에 대한 라벨 역할 수행 (component)
  return(
    <label style={{margin: '10px'}}>
      {props.labelText}
      {props.children}
    </label> //라벨에 표시될 문자열 | 라벨과 입력 필드 사이에 들어갈 자식 컴포넌트 (라벨 텍스트 이후에 모든 변수들?)
    //props.children : 컴포넌트의 태그 안에 포함된 자식 요소들 => <input type={props.type} value={props.value} onChange={props.onChange} />
  );
}

function SetInformation(props,){
  return(
    <Label labelText={props.labelText}>
    <input type={props.type} value={props.value} onChange={props.onChange} />
    </Label>
  ); //props.labelText는 Label컴포넌트에 전달되어 라벨에 표시 될 문자열정보
}

function App() { //메인함수
  const [name, setName] = useState(''); //기본 세팅
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) { //submit누르고 호출되는 함수
    event.preventDefault(); // 이벤트가 발생했을 때 브라우저가 기본적으로 실행하는 동작을 취소하고, 자바스크립트에서 지정한 동작을 실행할 수 있도록 한다. => 폼이 제출될 때 브라우저가 페이지를 새로고침하지 않고, console.log()를 호출하도록 합니다.
    console.log('Submitted:', name, email, message);
    alert(` Name: ${name}\n Email: ${email}\n Message: ${message}`); //경고창 띄워주기
    //''로 감싸면 문자열 내 변수 값을 삽입할 수 없음 => 백틱``을 사용해야함
  }

  return (
    <form onSubmit={handleSubmit}>
        <SetInformation labelText = "Name: " type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <SetInformation labelText ="Email: " type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <SetInformation labelText = "Message: " value={message} onChange={(event) => setMessage(event.target.value)} />
        <button type="submit">Submit</button>
    </form>
  ); //submit을 눌렀을 때 handleSubmit호출
  // onChange 속성에는 handleNameChange 함수가 전달 => 이름이 변경될 때마다 실행
}

export default App;
//다른 파일에서 import하여 사용할 수 있도록 내보내는 역할
