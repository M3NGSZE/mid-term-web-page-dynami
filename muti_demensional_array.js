const students = [
    ["P001", "Sok Pisey", "Male", "012332233", 89, 90, 76, 65],
    ["P002", "Eno", "Male", "010889988", 78, 88, 99, 67],
    ["P003", "Mai Sok Kun", "Male", "016999000", 89, 76, 76, 89],
    ["P004", "Ny Ratana", "Male", "015888999", 99, 88, 77, 66],
];

const tbody = document.querySelector("#studentTable tbody");

students.forEach((student, index) => {
    const [id, name, gender, phone, html, css, js, math] = student;
    const total = html + css + js + math;
    const average = total / 4;

    let grade = "";
    if (average >= 90) grade = "A";
    else if (average >= 80) grade = "B";
    else if (average >= 70) grade = "C";
    else if (average >= 60) grade = "D";
    else grade = "F";

    const row = `
<tr>
<td>${index + 1}</td>
<td>${id}</td>
<td>${name}</td>
<td>${gender}</td>
<td>${phone}</td>
<td>${html}</td>
<td>${css}</td>
<td>${js}</td>
<td>${math}</td>
<td>${total}</td>
<td>${average.toFixed(2)}</td>
<td>${grade}</td>
</tr>
`;

    tbody.innerHTML += row;
});