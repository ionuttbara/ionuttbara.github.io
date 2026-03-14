let users = JSON.parse(localStorage.getItem('planner_users')) || [];
let boards = JSON.parse(localStorage.getItem('planner_boards')) || [];
let currentUserEmail = localStorage.getItem('planner_current_user') || null;

function saveData() {
    localStorage.setItem('planner_users', JSON.stringify(users));
    localStorage.setItem('planner_boards', JSON.stringify(boards));
    renderSettings();
}

function renderSettings() {
    const list = document.getElementById('settingsUsersList');
    list.innerHTML = '';

    users.forEach(u => {
        // Dropdown multiplu (simulat prin checkbox-uri sau select multiplu)
        // Pentru simplitate, folosim un text care arată la ce board-uri are acces
        // Implicit, un user are acces la toate dacă lista de 'allowedBoards' e goală, sau doar la cele bifate.
        if(!u.allowedBoards) u.allowedBoards = boards.map(b => b.id); // Default: acces peste tot

        let boardCheckboxes = boards.map(b => `
            <label style="display:inline-flex; align-items:center; margin-right:10px; font-size:12px; cursor:pointer;">
                <input type="checkbox" ${u.allowedBoards.includes(b.id) ? 'checked' : ''} 
                       onchange="toggleUserBoard(${u.id}, ${b.id}, this.checked)" style="margin-right:4px;">
                ${b.name}
            </label>
        `).join('');

        list.innerHTML += `
            <div class="board-task-row" style="grid-template-columns: 2fr 1fr 2fr 1fr;">
                <div style="font-weight:bold;">${u.email}</div>
                <div><span class="role-badge role-${u.role}">${u.role}</span></div>
                <div>${u.role === 'admin' ? '<span style="font-size:12px; color:var(--color-primary);">Toate (Admin)</span>' : boardCheckboxes}</div>
                <div>
                    <button onclick="deleteUser(${u.id})" class="btn btn--outline btn--sm" style="color:var(--color-error); border-color:var(--color-error);"><i data-lucide="trash-2" style="width:14px; height:14px;"></i></button>
                </div>
            </div>
        `;
    });
    lucide.createIcons();
}

function toggleUserBoard(userId, boardId, isChecked) {
    let user = users.find(u => u.id === userId);
    if(user) {
        if(!user.allowedBoards) user.allowedBoards = [];
        if(isChecked) {
            if(!user.allowedBoards.includes(boardId)) user.allowedBoards.push(boardId);
        } else {
            user.allowedBoards = user.allowedBoards.filter(id => id !== boardId);
        }
        saveData();
    }
}

function deleteUser(id) {
    if(confirm("Ștergi acest utilizator?")) {
        users = users.filter(u => u.id !== id);
        saveData();
    }
}

// --- IMPORT / EXPORT LOGIC ---
function exportData() {
    // Curățăm parolele la export
    const safeUsers = users.map(u => ({ id: u.id, email: u.email, role: u.role, allowedBoards: u.allowedBoards }));
    const data = { users: safeUsers, boards: boards };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `planner_backup_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
}

function importData() {
    const file = document.getElementById('importFile').files[0];
    if(!file) return alert("Selectează un fișier JSON!");
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            if(data.boards) boards = data.boards;
            if(data.users) {
                // Îmbinare useri + setare parolă default dacă nu există în baza noastră
                data.users.forEach(importedUser => {
                    const existingUser = users.find(u => u.email === importedUser.email);
                    if(!existingUser) {
                        importedUser.password = "1234"; // Parolă default
                        users.push(importedUser);
                    } else {
                        existingUser.allowedBoards = importedUser.allowedBoards; // Updateăm doar permisiunile
                    }
                });
            }
            saveData();
            alert("Import finalizat cu succes!");
        } catch(err) { alert("Eroare la parsarea fișierului!"); }
    };
    reader.readAsText(file);
}

document.addEventListener('DOMContentLoaded', () => {
    if(!currentUserEmail || !users.find(u => u.email === currentUserEmail && u.role === 'admin')) {
        alert("Acces interzis! Doar administratorii pot accesa setările.");
        window.location.href = "index.html";
    }
    renderSettings();
});