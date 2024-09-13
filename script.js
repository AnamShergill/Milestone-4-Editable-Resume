// // lisiting our elements here
// List of element IDs to check
var ids = ['name', 'email', 'phone', 'cnic', 'address', 'nationality', 'education', 'experience', 'skills'];
var elements = ids.map(function (id) { return document.getElementById(id); });
elements.forEach(function (element, index) {
    if (!element) {
        console.error("Element with ID '".concat(ids[index], "' not found."));
    }
});
var form = document.getElementById('resumeform');
var resumeDisplayElement = document.getElementById('resumeOutput');
if (!form || !resumeDisplayElement) {
    console.error('Form or resume display element is missing.');
}
else {
    form.addEventListener('submit', function (event) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        event.preventDefault(); // To prevent page from reload
        // Getting input values    
        var name = ((_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value) || '';
        var email = ((_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value) || '';
        var phone = ((_c = document.getElementById('phone')) === null || _c === void 0 ? void 0 : _c.value) || '';
        var cnic = ((_d = document.getElementById('cnic')) === null || _d === void 0 ? void 0 : _d.value) || '';
        var address = ((_e = document.getElementById('address')) === null || _e === void 0 ? void 0 : _e.value) || '';
        var nationality = ((_f = document.getElementById('nationality')) === null || _f === void 0 ? void 0 : _f.value) || '';
        var education = ((_g = document.getElementById('education')) === null || _g === void 0 ? void 0 : _g.value) || '';
        var experience = ((_h = document.getElementById('experience')) === null || _h === void 0 ? void 0 : _h.value) || '';
        var skills = ((_j = document.getElementById('skill')) === null || _j === void 0 ? void 0 : _j.value) || '';
        // Create resume output
        var resumeHTML = "\n            <h2>Editable Resume</h2>\n            <h3>Personal Information</h3> \n            <p><strong>Name:</strong><span contenteditable=\"true\"> ".concat(name, " </span></p>\n            <p><strong>Email:</strong><span contenteditable=\"true\"> ").concat(email, " </span></p>\n            <p><strong>Number:</strong><span contenteditable=\"true\"> ").concat(phone, " </span></p>\n            <p><strong>CNIC:</strong><span contenteditable=\"true\"> ").concat(cnic, " </span></p>\n            <p><strong>Address:</strong><span contenteditable=\"true\"> ").concat(address, " </span></p>\n            <p><strong>Nationality:</strong><span contenteditable=\"true\"> ").concat(nationality, " </span></p>\n            \n            <h3>Education:</h3>\n            <p contenteditable=\"true\">").concat(education, "</p>\n\n            <h3>Experience:</h3>\n            <p contenteditable=\"true\">").concat(experience, "</p>\n            \n            <h3>Skills:</h3>\n            <p contenteditable=\"true\" >").concat(skills, "</p>\n        ");
        // Generating Resume
        resumeDisplayElement.innerHTML = resumeHTML;
    });
}
