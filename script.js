const navHome = document.querySelector("#nav-home");

navHome.addEventListener("click", function(){

    const navHomeHTML = `
    <h1 id="home-header">Home</h1>
    <p id="home-text">HOOOOOMMMMEEE Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    `

    document.querySelector("#container").innerHTML = navHomeHTML;

})


const navAboutMe = document.querySelector("#nav-about-me");

navAboutMe.addEventListener("click", function(){

    const navAboutMeHTML = `
    <h1 id="about-me-header">About Me</h1>
    <p id="about-me-text">ABOUT ME Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    `
    document.querySelector("#container").innerHTML = navAboutMeHTML;
})



const navContactMe = document.querySelector("#nav-contact-me");

navContactMe.addEventListener("click", function(){

    const navContactMeHTML = `
    <h1 id="contact-me-header">Contact Me</h1>
    <p id="contact-me-text">CONTACT ME Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <form>
        <input type="text" id="user-name" placeholder="Name" />
        <input type="text" id="user-message" placeholder="Message" />
    </form>
    <button id="submit-btn">Send</button>
    `
    document.querySelector("#container").innerHTML = navContactMeHTML;

    const contactMessageButton = document.querySelector("#submit-btn");

    contactMessageButton.addEventListener("click", function(){

        const messageButtonHTML = `
        <h1 id="contact-me-header">Contact Me</h1>
        <p id="contact-me-text">CONTACT ME Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <form>
            <input type="text" id="user-name" placeholder="Name" />
            <input type="text" id="user-message" placeholder="Message" />
        </form>
        <h5>Your message has been sent!</h5>
        <button id="submit-btn">Send</button>
        `

        document.querySelector("#container").innerHTML= messageButtonHTML;

    })

})


const navProjects = document.querySelector("#nav-projects");

navProjects.addEventListener("click", function(){

    const navProjectsHTML = `
    <h1 id="projects-header">Projects</h1>
    <p id="projects-text">PROJECTS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    `
    document.querySelector("#container").innerHTML = navProjectsHTML;
})


