
// Data that is used for the folders
const classData = {
    'Fall 2024': ['Fundamentals of Computing I', 'Digital Logic Circuits', 'Engineering Orientation', 'Statistics for Engineers and Scientists'],
    'Spring 2025': ['Fundamentals of Computing II', 'Discrete Structures', 'Assembly Language Programming', 'Calculus III'],
    'Summer 2025': ["Software Constriction"],
    'Fall 2025': ["Professional Development I", "Principles of Programming Languages", "Introduction to Algorithms", "Introduction to Operating Systems", "Software Modeling and Design"],
    'Spring 2026': ["Computer Architecture", "Introduction to Computer Networks", "Adaptive and Assistive Technologies", "Introduction to Data Science"],
    'Fall 2026': ["User Interface Design and Evaluation", "Database Systems", "Computers Ethics", "Data Mining", "Professional Development II"]

};

function openSemester(semester) {
    const modal = document.getElementById('semesterModal');
    const title = document.getElementById('modalTitle');
    const container = document.getElementById('folderContainer');
    
    title.innerText = semester + ".lib";
    container.innerHTML = ""; 
    
    // Create folder for each class
    classData[semester].forEach(className => {
        const folder = document.createElement('div');
        folder.className = 'folder-item';
        folder.innerHTML = `
            <div class="folder-icon"></div>
            <div class="folder-name">${className}</div>
        `;
        container.appendChild(folder);
    });

    modal.style.display = 'flex';
}

function closeSemester() {
    document.getElementById('semesterModal').style.display = 'none';
}

const hobbyData = {
    'Photography' : [''],
    'Cooking' : [''],
    'Travleing': [''],
    'Reading' : [''],
};

// Function to open the hobbies modal
// Function to open the specific Hobbies pop-up
function openHobby(hobbyName) {
    // 1. Open the Hobbies modal
    document.getElementById('hobbyModal').style.display = 'flex';
    
    // 2. Change the title of the window to match the button clicked
    document.getElementById('hobbyModalTitle').innerText = hobbyName + ".exe";
    
    // 3. Hide all hobby content sections first
    let allContents = document.getElementsByClassName('hobby-content');
    for (let i = 0; i < allContents.length; i++) {
        allContents[i].style.display = 'none';
    }
    
    // 4. Show only the content section for the hobby that was clicked
    document.getElementById('hobby-' + hobbyName).style.display = 'block';
}

// Function to close the Hobbies pop-up
function closeHobby() {
    document.getElementById('hobbyModal').style.display = 'none';
}
