document.getElementById('add-border').addEventListener('click', function(){
    const getFriend = document.getElementById('friend-container');
    getFriend.style.border= '1px solid red';
});
document.getElementById('add-background').addEventListener('click', function(){
    const friendName = document.getElementsByClassName('friend-name');
    for(const friend of friendName){
        friend.style.backgroundColor= 'lightblue';
    }
});
document.getElementById('add-friend').addEventListener('click', function(){
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
    <h3 class="friend-name">New friend</h3>
    <p>Sed in a, aut rem ratione ipsa perspiciatis nihil perferendis.</p>`

    container.appendChild(friendDiv);
});

