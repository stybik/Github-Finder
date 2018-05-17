//Init Github
const github = new Github;

//Init UI
const ui = new UI;

//Search input
const searchUser = document.getElementById('searchUser');

//search input event listner
searchUser.addEventListener('keyup', (e) => {
  //Get text input
  const userText = e.target.value;

  if(userText !== '')
  {
    console.log(userText);
    //Make http CAll

    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found')
      {
        //show alert user not found
        ui.showAlert('User Not Found', 'alert alert-danger');
      }
      else
      {
        //show the profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  }
  else{
    //clear the profile
    ui.clearProfile();
  }
});