function doesNotPassAllValidations(name, msg) {
    if (!name ) {
      alert('You forgot to fill in your name!')
      return true
    }
    
      if(!msg) {
          alert('You forgot to leave a messsage!')
        return true;
      }
  
    if(msg.length > 280) {
      alert('Your comment is too long')
      return true
    }
      
}
function submitComment()
{
   
    const inputField = document.getElementById('name')
   let name = inputField.value;
   const textArea = document.getElementById('msg')
   const msg = textArea.value;
   
   if(doesNotPassAllValidations(name, msg)){
    return null;
 }
 let badwords = ["bad","dirty","ugly"];
 for(let i=0;i<badwords.length;i++)
 {
     if(msg.includes(badwords[i])){
        alert('this comment has been flagged as offensive.')
    return
    }


 }

   const comment = document.createElement('section');
   const h3 = document.createElement('h3'); 
   const p = document.createElement('p');

   name= name.charAt(0).toUpperCase() + name.slice(1)
   h3.innerHTML = `${name} said:`


   p.innerHTML = msg
   comment.classList.add('comment')
   comment.appendChild(h3)
   comment.appendChild(p)
   const commentSection = document.getElementById('comments')
   commentSection.appendChild(comment)
   
    inputField.value = null;
    textArea.value = null;
   
}

  
 



