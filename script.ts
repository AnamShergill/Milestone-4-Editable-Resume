// // lisiting our elements here
// List of element IDs to check
const ids = ['name', 'email', 'phone', 'cnic', 'address', 'nationality', 'education', 'experience', 'skills'];
const elements = ids.map(id => document.getElementById(id));

elements.forEach((element, index) => {
    if (!element) {
        console.error(`Element with ID '${ids[index]}' not found.`);
    }
});

const form = document.getElementById('resumeform') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resumeOutput') as HTMLDivElement;

if (!form || !resumeDisplayElement) {
    console.error('Form or resume display element is missing.');
} else {
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault(); // To prevent page from reload

        // Getting input values    
        const name = (document.getElementById('name') as HTMLInputElement)?.value || '';
        const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
        const phone = (document.getElementById('phone') as HTMLInputElement)?.value || '';
        const cnic = (document.getElementById('cnic') as HTMLInputElement)?.value || '';
        const address = (document.getElementById('address') as HTMLInputElement)?.value || '';
        const nationality = (document.getElementById('nationality') as HTMLInputElement)?.value || '';
        const education = (document.getElementById('education') as HTMLInputElement)?.value || '';
        const experience = (document.getElementById('experience') as HTMLInputElement)?.value || '';
        const skills = (document.getElementById('skill') as HTMLInputElement)?.value || '';

        // Create resume output
        const resumeHTML = `
            <h2>Editable Resume</h2>
            <h3>Personal Information</h3> 
            <p><strong>Name:</strong><span contenteditable="true"> ${name} </span></p>
            <p><strong>Email:</strong><span contenteditable="true"> ${email} </span></p>
            <p><strong>Number:</strong><span contenteditable="true"> ${phone} </span></p>
            <p><strong>CNIC:</strong><span contenteditable="true"> ${cnic} </span></p>
            <p><strong>Address:</strong><span contenteditable="true"> ${address} </span></p>
            <p><strong>Nationality:</strong><span contenteditable="true"> ${nationality} </span></p>
            
            <h3>Education:</h3>
            <p contenteditable="true">${education}</p>

            <h3>Experience:</h3>
            <p contenteditable="true">${experience}</p>
            
            <h3>Skills:</h3>
            <p contenteditable="true" >${skills}</p>
        `;

        // Generating Resume
        resumeDisplayElement.innerHTML = resumeHTML;
    });
}
