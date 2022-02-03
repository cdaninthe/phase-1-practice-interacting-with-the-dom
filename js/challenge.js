document.addEventListener("DOMContentLoaded", function() {
    
    const counter = document.getElementById("counter")
    let interval = setInterval(incrementTimer, 1000);

    const plus = document.getElementById("plus")
    plus.addEventListener('click',incrementTimer)

    const minus = document.getElementById("minus")
    minus.addEventListener('click',decrementTimer)
    
    const heart = document.getElementById("heart")
    heart.addEventListener('click', likeNumber)
    
    const pause = document.getElementById("pause")
    pause.addEventListener('click', pauseTimer)

    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault()
        commentInput = document.getElementById('comment-input')
        const commentList = document.getElementById('list')
        const newComment = document.createElement('p')
        newComment.innerText = commentInput.value
        commentList.appendChild(newComment)
        commentInput.value = ''
    })

    function incrementTimer(){
        counter.innerText = parseInt(counter.innerText, 10) + 1
    }

    function decrementTimer(){
        counter.innerText = parseInt(counter.innerText, 10) - 1
    }

    const likes = []
    
    function likeNumber(){
        let number = counter.innerText
        likes[number] = likes[number] || 0
        likes[number] += 1
        addLikes()
    }

    function addLikes(){
        const ul = document.querySelector('ul')
        ul.innerHTML = ""
        for (let key in likes){
            const li = document.createElement("li")
            if (likes[key] === 1) {
                li.innerText = `${key} has been liked ${likes[key]} time.`
            }
            else {
                li.innerText = `${key} has been liked ${likes[key]} times.`
            }
            ul.append(li)
        }
    }


    function pauseTimer() {
        if (pause.innerText === 'pause'){
            pause.innerText = 'resume'
            minus.disabled = true
            plus.disabled = true
            heart.disabled = true
            clearInterval(interval)
        } 
        else {
            pause.innerText = 'pause'
            minus.disabled = false
            plus.disabled = false
            heart.disabled = false
            interval = setInterval(incrementTimer, 1000);
        }
    }



});
