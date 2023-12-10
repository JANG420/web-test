function SendMessage(){
    const MessageInput = document.getElementById('user-input');
    const Message = MessageInput.value;
    
    // 입력된 메시지의 공백 확인
    if(Message.trim() !== ''){    
        const temp_UserName = localStorage.getItem('name');
        const ChatBox = document.getElementById('message-container');                        
        const CreateMessage = document.createElement('div');      
        const CreateUsername = document.createElement('strong');
        CreateUsername.textContent = `${temp_UserName} : `;

        // 메시지 요소를 박스에 추가
        CreateMessage.appendChild(CreateUsername);
        CreateMessage.appendChild(document.createTextNode(Message));
        ChatBox.appendChild(CreateMessage);

        // 입력 초기화
        MessageInput.value = '';

        Scrollbutton();
    }
}

function Scrollbutton(){
    var ChatBox = document.getElementById('chat-box');
    ChatBox.scrollTop = ChatBox.scrollHeight;
}

function KeyPress(event){
    if(event.key == 'Enter'){
        SendMessage();
    }
}

var CloseButton = document.getElementsByClassName('close')[0];
document.getElementById('post-box').onclick = openPostModal;
CloseButton.onclick = closePostModal;

function openPostModal() {
    document.getElementById('post-modal').style.display = 'block';
}

function closePostModal() {
    var modal = document.getElementById('post-modal');
    modal.style.display = 'none';
}
