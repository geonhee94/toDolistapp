//1 유저가 값을 입력한다.
//2 +버튼을 클릭하면(버튼에 클릭 이벤트 줘야겠구나), 할일이 추가된다 
//3 delete 버튼을 누르면 할일이 삭제된다 
//4 check 버튼을 누르면 밑줄이 간다 
//5 진행중 끝남 탭을 누르면, 언더바가 이동한다 
//6 끝남탭은 끝난 아이템만, 진행중탭은 진행중인 아이템만 
//7 전체 탭을 누르면 다시 전체아이템으로 돌아옴

//1번을 하기 위해 인풋을 들고온다. 
let taskInput = document.getElementById("task-input")
//taskInput을 가져왔는지 볼까?
//console.log(taskInput);
let addButton = document.getElementById("add-button")
//2번 할일 추가에서 여러가지 추가할수 있게 배열을 쓰자.
let taskList = []
//2번 add버튼에다 이벤트를 주고 싶어 (click 이벤트랑 addTask라는 함수)
addButton.addEventListener("click",addTask)

//addTask를 만들어주자 
function addTask(){
    //클릭이 됐는지 콘솔을 입력해보자.(계속 확인해야함)
    //console.log("clicked")
    //태스크 인풋에 밸류를 들고오는 태스크 컨텐츠를 만들자.
    //태스크 인풋에 그걸 입력하면 그걸 콘텐츠화 해서 리스트에 푸쉬할 것으로 짜는 것.
    let taskContent = taskInput.value
    taskList.push(taskContent)
    console.log(taskList)
    render()
}

//리스트를 그려줄거야 그리는함수를 만들어줘
function render(){
    let resultHTML = ''
    //tasklist가 생기는 만큼 class=task를 생성해주는것.
    for(let i=0; i<taskList.length;i++){
        resultHTML += `<div class="task">
        <div>${taskList[i]}</div>
        <div>
            <button>Check</button>
            <button>Delete</button>
        </div>
      </div>`

    }


    //테스크 보드를 들고와서 테스크보드에 resulthtml을 붙여넣을거다.
    document.getElementById("task-board").innerHTML = resultHTML
}