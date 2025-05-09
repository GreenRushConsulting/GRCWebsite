// Form stuf
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    var formData = new FormData(this);
    
    console.log('Form data being sent:');
    formData.forEach(function(value, key) {
        console.log(key + ": " + value);
    });

    fetch('https://hooks.zapier.com/hooks/catch/980146/2l8cr7v/', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        console.log('Response from Zapier:', response);
        return response.json();
    })
    .then(data => {
        console.log('Zapier response data:', data);
        alert('Form submitted successfully!');
        document.getElementById('contact-form').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form.');
    });
});

document.getElementById('menu-image').addEventListener('click', function() {
    console.log("GotIt")
    const headerMenu = document.getElementById('HeaderMenu');
    headerMenu.classList.toggle('open');
});

//Linking and boxes
document.addEventListener("DOMContentLoaded", function () {
    const statesLink = document.getElementById("States");

    const menu = document.createElement("div");
    menu.id = "statesMenu";
    Object.assign(menu.style, {
        display: "none",
        position: "fixed",
        top: "25%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "#fff",
        border: "1px solid #ccc",
        padding: "10px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
        borderRadius: "5px",
        zIndex: "1000",
        width: "1000px",
    });

    const statesContainer = document.createElement("div");
    statesContainer.id ="State1"
    Object.assign(statesContainer.style, {
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: "8px",
        padding: "10px",
        fontsize: "14px",
    });

    // Linking and stuf
    const stateLinks = [
        { name: "Alabama", link: "how-to-open-a-dispensary-in-alabama" },
        { name: "Alaska", link: "how-to-open-a-dispensary-in-alaska" },
        { name: "Arizona", link: "how-to-open-a-dispensary-in-arizona" },
        { name: "Arkansas", link: "how-to-open-a-dispensary-in-arkansas" },
        { name: "California", link: "how-to-open-a-dispensary-in-california" },
        { name: "Colorado", link: "how-to-open-a-dispensary-in-colorado" },
        { name: "Connecticut", link: "how-to-open-a-dispensary-in-connecticut" },
        { name: "Delaware", link: "how-to-open-a-dispensary-in-delaware" },
        { name: "Florida", link: "how-to-open-a-dispensary-in-florida" },
        { name: "Georgia", link: "how-to-open-a-dispensary-in-georgia" },
        { name: "Hawaii", link: "how-to-open-a-dispensary-in-hawaii" },
        { name: "Idaho", link: "how-to-open-a-dispensary-in-idaho" },
        { name: "Illinois", link: "how-to-open-a-dispensary-in-illinois" },
        { name: "Indiana", link: "how-to-open-a-dispensary-in-indiana" },
        { name: "Iowa", link: "how-to-open-a-dispensary-in-iowa" },
        { name: "Kansas", link: "how-to-open-a-dispensary-in-kansas" },
        { name: "Kentucky", link: "how-to-open-a-dispensary-in-kentucky" },
        { name: "Louisiana", link: "how-to-open-a-dispensary-in-louisiana" },
        // { name: "Maine", link: "BuddingEarly" },
        { name: "Maryland", link: "how-to-open-a-dispensary-in-maryland" },
        { name: "Massachusetts", link: "how-to-open-a-dispensary-in-massachusetts" },
        { name: "Michigan", link: "how-to-open-a-dispensary-in-michigan" },
        { name: "Minnesota", link: "how-to-open-a-dispensary-in-minnesota" },
        { name: "Mississippi", link: "how-to-open-a-dispensary-in-mississippi" },
        { name: "Missouri", link: "how-to-open-a-dispensary-in-missouri" },
        { name: "Montana", link: "how-to-open-a-dispensary-in-montana" },
        { name: "Nebraska", link: "how-to-open-a-dispensary-in-nebraska" },
        { name: "Nevada", link: "how-to-open-a-dispensary-in-nevada" },
        { name: "New Hampshire", link: "how-to-open-a-dispensary-in-new-hampshire" },
        { name: "New Jersey", link: "how-to-open-a-dispensary-in-new-jersey" },
        { name: "New Mexico", link: "how-to-open-a-dispensary-in-new-mexico" },
        { name: "New York", link: "how-to-open-a-dispensary-in-new-york" },
        { name: "North Carolina", link: "how-to-open-a-dispensary-in-north-carolina" },
        { name: "North Dakota", link: "how-to-open-a-dispensary-in-north-dakota" },
        { name: "Ohio", link: "how-to-open-a-dispensary-in-ohio" },
        { name: "Oklahoma", link: "how-to-open-a-dispensary-in-oklahoma" },
        { name: "Oregon", link: "how-to-open-a-dispensary-in-oregon" },
        { name: "Pennsylvania", link: "how-to-open-a-dispensary-in-pennsylvania" },
        { name: "Rhode Island", link: "how-to-open-a-dispensary-in-rhode-island" },
        { name: "South Carolina", link: "how-to-open-a-dispensary-in-south-carolina" },
        { name: "South Dakota", link: "how-to-open-a-dispensary-in-south-dakota" },
        { name: "Tennessee", link: "how-to-open-a-dispensary-in-tennessee" },
        { name: "Texas", link: "how-to-open-a-dispensary-in-texas" },
        // { name: "Utah", link: "BuddingEarly" },
        { name: "Vermont", link: "how-to-open-a-dispensary-in-vermont" },
        // { name: "Virginia", link: "BuddingEarly" },
        // { name: "Washington", link: "BuddingEarly" },
        // { name: "West Virginia", link: "BuddingEarly" },
        // { name: "Wisconsin", link: "BuddingEarly" },
        // { name: "Wyoming", link: "BuddingEarly" },
        // { name: "Washington, D.C.", link: "BuddingEarly" },
        // { name: "Virgin Islands", link: "BuddingEarly" }
    ];

    stateLinks.forEach(state => {
        const menubounds = document.createElement("div");
        menubounds.id = "menubounds";
        menubounds.textContent = state.name;
        Object.assign(menubounds.style, {
            padding: "8px",
            cursor: "pointer",
            transition: "background 0.3s",
            textAlign: "center",
            borderRadius: "4px"
        });

        menubounds.addEventListener("mouseover", () => menubounds.style.background = "#f0f0f0");
        menubounds.addEventListener("mouseout", () => menubounds.style.background = "transparent");
        menubounds.addEventListener("click", () => {
            window.location.href = state.link;
        });

        statesContainer.appendChild(menubounds);
    });

    menu.appendChild(statesContainer);
    document.body.appendChild(menu);

    statesLink.addEventListener("mouseenter", () => {
        menu.style.display = "block";
    });

    menu.addEventListener("mouseleave", () => {
        menu.style.display = "none";
    });
    document.addEventListener("click", (event) => {
        if (menu.style.display === "block" && event.target !== statesLink && !menu.contains(event.target)) {
            menu.style.display = "none";
        }
    });
});


//dynamic footer position cause it doesnt like iphones
function positionFooter() {
    const getStarted = document.getElementById('getstarted');
    const footer = document.querySelector('.Footer');
    if (getStarted && footer) {
        const offset = getStarted.offsetTop + getStarted.offsetHeight * 10.15;
        footer.style.top = offset + 'px !important';
    }
}

document.addEventListener("DOMContentLoaded", positionFooter);
window.addEventListener("resize", positionFooter);
