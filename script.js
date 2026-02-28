const classData = {
    'Fall 2024': ['Fundamentals of Computing I', 'Digital Logic Circuits', 'Engineering Orientation', 'Statistics for Engineers and Scientists'],
    'Spring 2025': ['Fundamentals of Computing II', 'Discrete Structures', 'Assembly Language Programming', 'Calculus III'],
    'Summer 2025': ["Software Constriction"],
    'Fall 2025': ["Professional Development I", "Principles of Programming Languages", "Introduction to Algorithms", "Introduction to Operating Systems", "Software Modeling and Design"],
    'Spring 2026': ["Computer Architecture", "Introduction to Computer Networks", "Adaptive and Assistive Technologies", "Introduction to Data Science"]
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