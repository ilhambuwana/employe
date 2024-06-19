document.addEventListener('DOMContentLoaded', function() {
    const departments = [
        {
            department: 'Sales',
            employeeName: 'Alice Johnson',
            employeeImg: 'https://via.placeholder.com/300x200.png?text=Alice+Johnson'
        },
        {
            department: 'Marketing',
            employeeName: 'Bob Smith',
            employeeImg: 'https://via.placeholder.com/300x200.png?text=Bob+Smith'
        },
        {
            department: 'Development',
            employeeName: 'Charlie Brown',
            employeeImg: 'https://via.placeholder.com/300x200.png?text=Charlie+Brown'
        },
        {
            department: 'Support',
            employeeName: 'Diana Prince',
            employeeImg: 'https://via.placeholder.com/300x200.png?text=Diana+Prince'
        }
    ];

    const departmentsContainer = document.getElementById('departments');

    departments.forEach(department => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = department.employeeImg;
        img.alt = `${department.employeeName}`;

        const info = document.createElement('div');
        info.className = 'info';

        const name = document.createElement('h2');
        name.textContent = department.employeeName;

        const dept = document.createElement('p');
        dept.textContent = department.department;

        info.appendChild(name);
        info.appendChild(dept);

        card.appendChild(img);
        card.appendChild(info);

        departmentsContainer.appendChild(card);
    });
});
