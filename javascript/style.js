var side_bar_button=document.getElementById("side_bar");
side_bar_button.addEventListener("click", function () {
    side_bar_button.style.visibility="hidden";
    var navigation_bar = document.getElementById("navigation_bar")
    navigation_bar.className = "navigate";
    navigation_bar.className+=" my-font";

    var home_div = document.createElement('div')
    home_div.className="navigate_elements"
    var home = document.createElement('a')
    home.setAttribute('href',"#")
    home.innerHTML="Home";
    home.style.color="white"
    home_div.appendChild(home)
    
    var about_div = document.createElement('div')
    about_div.className="navigate_elements"
    var about = document.createElement('a')
    about.setAttribute('href',"#");
    about.innerHTML="About";
    about.style.color="white"
    about_div.appendChild(about)
    
    var team_div = document.createElement('div')
    team_div.className="navigate_elements"
    var team = document.createElement('a')
    team.setAttribute('href',"#");
    team.innerHTML="Team Members";
    team.style.color="white";
    team_div.appendChild(team)
    
    var contact_div = document.createElement('div')
    contact_div.className="navigate_elements"
    var contact = document.createElement('a')
    contact.setAttribute('href',"#");
    contact.innerHTML="Contact Us";
    contact.style.color="white"
    contact_div.appendChild(contact)



    var hr=document.createElement('hr')
    hr.className="navigate_hr"
    hr.className+=" navigate_bottom"

    var close_button=document.createElement('button')
    close_button.innerHTML='>>'
    close_button.className="navigate_elements"
    close_button.className+=" navigate_button";
    

    navigation_bar.appendChild(home_div)
    navigation_bar.appendChild(about_div)
    navigation_bar.appendChild(team_div)
    navigation_bar.appendChild(contact_div)
    navigation_bar.appendChild(hr)
    navigation_bar.appendChild(close_button)

    close_button.addEventListener("click",function(){
        navigation_bar.removeChild(home_div)
        navigation_bar.removeChild(about_div)
        navigation_bar.removeChild(team_div)
        navigation_bar.removeChild(contact_div)
        navigation_bar.removeChild(hr)
        navigation_bar.removeChild(close_button)
        navigation_bar.className=""
        side_bar_button.style.visibility="visible";
    })

  });