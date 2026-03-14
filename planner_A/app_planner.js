// --- Baza de Date Simulată ---
let users = JSON.parse(localStorage.getItem('planner_users')) || [];
let boards = JSON.parse(localStorage.getItem('planner_boards')) || [];
let currentUserEmail = localStorage.getItem('planner_current_user') || null;
let currentModalIds = { boardId: null, subgroupId: null, taskId: null };

// Reținem ID-ul Board-ului selectat din stânga
let activeBoardId = localStorage.getItem('planner_active_board') || null;
let oobeTempUsersList = [];

function saveData() {
    localStorage.setItem('planner_users', JSON.stringify(users));
    localStorage.setItem('planner_boards', JSON.stringify(boards));
    if(currentUserEmail) localStorage.setItem('planner_current_user', currentUserEmail);
    else localStorage.removeItem('planner_current_user');
    
    if(activeBoardId) localStorage.setItem('planner_active_board', activeBoardId);
}

function getCurrentUser() { return users.find(u => u.email === currentUserEmail) || null; }

function resetDatabase() {
    if(confirm("Ești sigur că vrei să ȘTERGI ABSOLUT TOT? (Utilizatori, Board-uri, Task-uri)")) {
        localStorage.removeItem('planner_users');
        localStorage.removeItem('planner_boards');
        localStorage.removeItem('planner_current_user');
        localStorage.removeItem('planner_active_board');
        location.reload();
    }
}

// --- Toggle Vizibilitate Parolă ---
function togglePassword(inputId, btnElement) {
    const input = document.getElementById(inputId);
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    
    // Înlocuim iconița din interiorul butonului
    btnElement.innerHTML = `<i data-lucide="${isPassword ? 'eye-off' : 'eye'}"></i>`;
    lucide.createIcons(); // Re-randăm noua iconiță SVG
}

// --- LOGICA OOBE & AUTH ---
function showError(msg) {
    const err = document.getElementById('authError');
    if(msg) { err.innerText = msg; err.style.display = 'block'; }
    else { err.style.display = 'none'; }
}

function switchAuthView(viewId, headerText) {
    document.querySelectorAll('.oobe-step').forEach(el => el.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    document.getElementById('authHeaderState').innerText = headerText;
    showError(false);
    lucide.createIcons();
}

function checkAuthStatus() {
    const authOverlay = document.getElementById('authOverlay');
    const appMain = document.getElementById('appMain');

    if (users.length === 0) {
        authOverlay.classList.remove('hidden'); appMain.style.display = 'none';
        switchAuthView('viewOobeAdmin', 'Setare Inițială');
    } 
    else if (!getCurrentUser()) {
        authOverlay.classList.remove('hidden'); appMain.style.display = 'none';
        switchAuthView('viewLogin', 'Autentificare');
    } 
    else {
        authOverlay.classList.add('hidden'); appMain.style.display = 'block';
        verifyDatabaseIntegrity(); // Curata task-urile cu utilizatori fantoma
        renderApp();
    }
}

function handleLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const pass = document.getElementById('loginPass').value.trim();
    if(!email || !pass) return showError("Completează ambele câmpuri!");

    const foundUser = users.find(u => u.email === email && u.password === pass);
    if (foundUser) {
        currentUserEmail = foundUser.email;
        saveData();
        document.getElementById('loginPass').value = '';
        checkAuthStatus();
    } else { showError("Email sau parolă incorecte!"); }
}

function oobeSaveAdmin() {
    const email = document.getElementById('oobeAdminEmail').value.trim();
    const pass = document.getElementById('oobeAdminPass').value.trim();
    if(!email || !pass) return showError("Sunt necesare ambele câmpuri pentru Admin!");
    
    users.push({ id: Date.now(), email: email, password: pass, role: 'admin' });
    currentUserEmail = email;
    saveData();
    switchAuthView('viewOobeUsers', 'Setare Echipă');
}

function oobeAddTempUser() {
    const email = document.getElementById('oobeUserEmail').value.trim();
    const pass = document.getElementById('oobeUserPass').value.trim();
    if(!email || !pass) return showError("Introdu email-ul și parola.");
    if(users.find(u => u.email === email) || oobeTempUsersList.find(u => u.email === email)) return showError("Acest email există deja!");

    oobeTempUsersList.push({ id: Date.now() + Math.random(), email: email, password: pass, role: 'user' });
    document.getElementById('oobeUserEmail').value = ''; document.getElementById('oobeUserPass').value = '';
    document.getElementById('oobeTempUsersList').innerHTML = oobeTempUsersList.map(u => `<li><i data-lucide="check-circle" style="width:12px; margin-right:4px;"></i> ${u.email}</li>`).join('');
    showError(false); lucide.createIcons();
}

function oobeNextStep(nextViewId) {
    if(nextViewId === 'viewOobeBoard') {
        if(oobeTempUsersList.length > 0) { users = users.concat(oobeTempUsersList); saveData(); }
        switchAuthView('viewOobeBoard', 'Creare Board');
    }
}

function oobeFinish(createBoard) {
    if(createBoard) {
        const boardName = document.getElementById('oobeBoardName').value.trim();
        if(!boardName) return showError("Te rog să introduci un nume.");
        const newBoardId = Date.now();
        boards.push({ id: newBoardId, name: boardName, subgroups: [] });
        activeBoardId = newBoardId; // Setăm ca board activ
        saveData();
    }
    checkAuthStatus();
}

function logoutUser() {
    currentUserEmail = null; saveData(); checkAuthStatus();
}

// --- GESTIUNE STRUCTURĂ: BOARDS & SUBGROUPS ---

function addBoard() {
    const boardName = document.getElementById('newBoardName').value.trim();
    if (boardName) {
        const newBoardId = Date.now();
        boards.push({ id: newBoardId, name: boardName, subgroups: [] });
        document.getElementById('newBoardName').value = '';
        activeBoardId = newBoardId; // Switch pe noul board
        saveData(); renderApp();
    }
}

function switchBoard(boardId) {
    activeBoardId = boardId;
    saveData();
    renderApp();
}

function deleteBoard(boardId, event) {
    event.stopPropagation(); // Evităm declanșarea switchBoard() când dăm click pe Trash
    if(confirm("Ștergi COMPLET acest board și toate task-urile lui?")) {
        boards = boards.filter(b => b.id != boardId);
        if(activeBoardId == boardId) activeBoardId = null; // Resetăm dacă am șters board-ul curent
        saveData(); renderApp();
    }
}

function addSubgroup(boardId) {
    const subName = prompt("Numele noului subgrup (Ex: Frontend, Design, Bug Fixes):");
    if(subName && subName.trim()) {
        const board = boards.find(b => b.id == boardId);
        if(board) {
            board.subgroups.push({ id: Date.now(), name: subName.trim(), tasks: [] });
            saveData(); renderApp();
        }
    }
}

function addTask(boardId, subgroupId) {
    const taskInput = document.getElementById(`newTaskInput_${subgroupId}`);
    const taskName = taskInput.value.trim();
    if (!taskName) return;

    const board = boards.find(b => b.id == boardId);
    if (board) {
        const subgroup = board.subgroups.find(s => s.id == subgroupId);
        if(subgroup) {
            subgroup.tasks.push({
                id: Date.now(), name: taskName, status: 'To Do', priority: 'Mediu', 
                assignedTo: '', timeTracking: 0, costFix: 0, 
                lastUpdated: new Date().toLocaleString('ro-RO')
            });
            saveData(); renderApp();
        }
    }
}

function updateTask(boardId, subgroupId, taskId, field, value) {
    const board = boards.find(b => b.id == boardId);
    if (board) {
        const subgroup = board.subgroups.find(s => s.id == subgroupId);
        if(subgroup) {
            const task = subgroup.tasks.find(t => t.id == taskId);
            if (task) {
                task[field] = value;
                task.lastUpdated = new Date().toLocaleString('ro-RO');
                saveData();
                if(field !== 'name' && field !== 'timeTracking' && field !== 'costFix') renderApp();
                else renderApp(); 
            }
        }
    }
}

function deleteTask(boardId, subgroupId, taskId) {
    if(confirm("Ștergi acest task?")) {
        const board = boards.find(b => b.id == boardId);
        if (board) {
            const subgroup = board.subgroups.find(s => s.id == subgroupId);
            if(subgroup) {
                subgroup.tasks = subgroup.tasks.filter(t => t.id != taskId);
                saveData(); renderApp();
            }
        }
    }
}

// --- UTILIZATORI ---
function addUser() {
    const email = document.getElementById('newUserEmail').value.trim();
    const pass = document.getElementById('newUserPass').value.trim();
    const role = document.getElementById('newUserRole').value;
    
    if (email && pass && !users.find(u => u.email === email)) {
        // Dacă adăugăm un user din board, primește acces automat la acest board curent
        const initialBoards = (role === 'admin' || !activeBoardId) ? [] : [activeBoardId];
        users.push({ id: Date.now(), email, password: pass, role, allowedBoards: initialBoards });
        
        document.getElementById('newUserEmail').value = ''; 
        document.getElementById('newUserPass').value = '';
        saveData(); 
        renderApp();
    } else { 
        alert("Date invalide sau email deja existent!"); 
    }
}

function deleteUser(userId) {
    if(confirm("Ștergi acest utilizator?")) {
        users = users.filter(u => u.id !== userId);
        saveData(); renderApp();
    }
}

function openTaskModal(boardId, subgroupId, taskId) {
    const board = boards.find(b => b.id == boardId);
    const subgroup = board.subgroups.find(s => s.id == subgroupId);
    const task = subgroup.tasks.find(t => t.id == taskId);
    
    currentModalIds = { boardId, subgroupId, taskId };
    document.getElementById('modalTaskTitle').innerText = task.name;
    document.getElementById('taskModal').classList.remove('hidden');
    renderComments(task);
}

function closeTaskModal() {
    document.getElementById('taskModal').classList.add('hidden');
}

function addComment() {
    const input = document.getElementById('modalCommentInput');
    const type = document.getElementById('modalCommentType').value;
    const text = input.value.trim();
    if(!text) return;

    const board = boards.find(b => b.id == currentModalIds.boardId);
    const subgroup = board.subgroups.find(s => s.id == currentModalIds.subgroupId);
    const task = subgroup.tasks.find(t => t.id == currentModalIds.taskId);
    
    if(!task.comments) task.comments = [];
    
    task.comments.push({
        id: Date.now(),
        author: currentUserEmail.split('@')[0],
        text: text,
        type: type, // 'comment', 'repro', 'file'
        date: new Date().toLocaleString('ro-RO')
    });
    
    input.value = '';
    saveData();
    renderComments(task);
    renderApp(); // pt a actualiza contorul de comentarii pe board
}

function renderComments(task) {
    const list = document.getElementById('modalCommentsList');
    if(!task.comments || task.comments.length === 0) {
        list.innerHTML = `<p style="color:var(--color-text-secondary); text-align:center; margin-top:20px;">Niciun mesaj încă.</p>`;
        return;
    }

    list.innerHTML = task.comments.map(c => {
        let icon = c.type === 'repro' ? '🐛' : (c.type === 'file' ? '📎' : '💬');
        let color = c.type === 'repro' ? 'var(--color-error)' : (c.type === 'file' ? 'var(--color-primary)' : 'var(--color-text)');
        
        return `
        <div style="background: var(--color-bg-1); padding: 10px 14px; border-radius: 8px; border-left: 3px solid ${color};">
            <div style="display:flex; justify-content:space-between; font-size:11px; color:var(--color-text-secondary); margin-bottom:5px;">
                <strong>${icon} ${c.author}</strong> <span>${c.date}</span>
            </div>
            <div style="font-size:13px; word-break: break-word;">
                ${c.type === 'file' ? `<a href="${c.text}" target="_blank" style="color:var(--color-primary); text-decoration:underline;">${c.text}</a>` : c.text}
            </div>
        </div>
        `;
    }).join('');
}
function renderApp() {
    const currentUser = getCurrentUser();
    if(!currentUser) return;
    const isAdmin = currentUser.role === 'admin';

    // 1. Randare Admin Controale
    document.getElementById('currentUserDisplay').innerText = `${currentUser.email.split('@')[0]}`;
    document.getElementById('btnSettings').style.display = isAdmin ? 'flex' : 'none';
    document.getElementById('adminUserControls').style.display = isAdmin ? 'block' : 'none';
    document.getElementById('adminGroupControls').style.display = isAdmin ? 'block' : 'none';

    // --- FILTRARE BOARDS PENTRU USER CURENT ---
    let userBoards = boards;
    if(!isAdmin) {
        userBoards = boards.filter(b => !currentUser.allowedBoards || currentUser.allowedBoards.includes(b.id));
    }

    if (userBoards.length > 0 && (!activeBoardId || !userBoards.find(b => b.id == activeBoardId))) {
        activeBoardId = userBoards[0].id;
        saveData();
    }

    // --- RANDARE ECHIPĂ PROIECT ---
    let teamUsers = [];
    if (activeBoardId) {
        teamUsers = users.filter(u => u.role === 'admin' || (u.allowedBoards && u.allowedBoards.includes(activeBoardId)));
    }

    const usersList = document.getElementById('usersList');
    usersList.innerHTML = teamUsers.map(u => `
        <div class="user-item">
            <div><span class="role-badge role-${u.role}">${u.role}</span> <span style="font-size: 13px; margin-left: 8px;">${u.email}</span></div>
            ${(isAdmin && u.id !== currentUser.id) ? `<button onclick="deleteUser(${u.id})" style="background:none; border:none; cursor:pointer; color:var(--color-error);"><i data-lucide="trash-2" style="width:14px; height:14px;"></i></button>` : ''}
        </div>
    `).join('');

    if (teamUsers.length === 0) {
        usersList.innerHTML = `<p style="font-size:12px; color:var(--color-text-secondary);">Niciun membru in echipă.</p>`;
    }

    // --- RANDARE LISTĂ BOARD-URI (SIDEBAR) ---
    const boardNavList = document.getElementById('boardNavList');
    boardNavList.innerHTML = userBoards.map(b => `
        <li class="board-nav-item ${b.id == activeBoardId ? 'active' : ''}" onclick="switchBoard(${b.id})">
            <span style="display:flex; align-items:center; gap:8px;">
                <i data-lucide="kanban-square" style="width:18px; height:18px; color: ${b.id == activeBoardId ? 'var(--color-primary)' : 'var(--color-text-secondary)'};"></i>
                ${b.name}
            </span>
            ${isAdmin ? `<button onclick="deleteBoard(${b.id}, event)" style="background:none;border:none;color:var(--color-error);cursor:pointer;" title="Șterge Board"><i data-lucide="trash-2" style="width:14px;height:14px;"></i></button>` : ''}
        </li>
    `).join('');

    if (userBoards.length === 0) {
        boardNavList.innerHTML = `<li style="padding:15px; font-size:13px; color:var(--color-text-secondary); text-align:center;">Niciun proiect activ</li>`;
    }

    // --- RANDARE BOARD CURENT (DREAPTA CU TOOLBAR) ---
    const displayArea = document.getElementById('plannerDisplay');
    displayArea.innerHTML = '';

    const currentBoard = userBoards.find(b => b.id == activeBoardId);
    
    if (!currentBoard) {
        displayArea.innerHTML = `<div class="card"><div class="card__body" style="text-align:center; padding: 60px;">Selectează un proiect din stânga sau creează unul nou.</div></div>`;
    } else {
        
        // Generăm opțiunile de filtru persoane pt Toolbar
        const filterUsersOpts = `<option value="">👤 Toate persoanele</option>` + 
                                teamUsers.map(u => `<option value="${u.email}" ${filterPerson === u.email ? 'selected' : ''}>${u.email.split('@')[0]}</option>`).join('');

        let boardHtml = `
            <div class="board-container fade-in">
                
                <div class="board-main-header">
                    <span style="display:flex; align-items:center; gap:10px;"><i data-lucide="kanban-square" style="color:var(--color-primary); width:28px; height:28px;"></i> ${currentBoard.name}</span>
                </div>

                <div class="board-toolbar">
                    ${isAdmin ? `<button class="btn btn--primary" onclick="addSubgroup(${currentBoard.id})"><i data-lucide="plus"></i> Grup Nou</button>` : ''}
                    
                    <div class="input-icon-wrapper" style="width: 250px; margin-bottom: 0;">
                        <i data-lucide="search" class="icon-left" style="color: var(--color-text-secondary);"></i>
                        <input type="text" class="form-control" placeholder="Caută task..." value="${searchQuery}" onkeyup="setSearchQuery(this.value)">
                    </div>

                    <select class="form-control" style="width: auto; height: 38px;" onchange="setFilterPerson(this.value)">
                        ${filterUsersOpts}
                    </select>

                    <button class="btn btn--outline" onclick="toggleSort()" title="Sortează A-Z / Z-A">
                        <i data-lucide="${sortAsc ? 'arrow-down-a-z' : 'arrow-up-z-a'}"></i> Sortare
                    </button>
                </div>
        `;

        if(currentBoard.subgroups.length === 0) {
            boardHtml += `<div class="card"><div class="card__body" style="color:var(--color-text-secondary); font-style:italic; text-align:center; padding: 40px;">Acest proiect nu are niciun subgrup. ${isAdmin ? 'Apasă butonul Grup Nou de mai sus.' : ''}</div></div>`;
        }

        currentBoard.subgroups.forEach(subgroup => {
            
            // --- APLICĂM FILTRELE PE TASK-URI ---
            let tasksToRender = subgroup.tasks;
            
            if (filterPerson) {
                tasksToRender = tasksToRender.filter(t => t.assignedTo === filterPerson);
            }
            if (searchQuery) {
                tasksToRender = tasksToRender.filter(t => t.name.toLowerCase().includes(searchQuery));
            }

            // --- APLICĂM SORTAREA (Alfabetic) ---
            tasksToRender.sort((a, b) => {
                let nameA = a.name.toLowerCase();
                let nameB = b.name.toLowerCase();
                if (nameA < nameB) return sortAsc ? -1 : 1;
                if (nameA > nameB) return sortAsc ? 1 : -1;
                return 0;
            });

            boardHtml += `
                <div class="board-group">
                    <div class="subgroup-header">
                        <strong style="color: var(--color-primary); display:flex; align-items:center; gap:8px;">
                            <i data-lucide="chevron-down"></i> ${subgroup.name}
                        </strong>
                        <span style="font-size:12px; color:var(--color-text-secondary); background: var(--color-bg-1); padding: 4px 8px; border-radius: 12px;">${tasksToRender.length} task-uri</span>
                    </div>
                    
                    <div class="board-header-row">
                        <div>Task Name</div><div>Persoană</div><div>Status</div><div>Prioritate</div>
                        <div>Timp (h)</div><div>Cost Fix</div><div>Cost Total</div><div>Ultima Modificare</div><div></div>
                    </div>
            `;

            tasksToRender.forEach(task => {
                const totalCost = (parseFloat(task.costFix) || 0) + ((parseFloat(task.timeTracking) || 0) * 50);
                const pClass = task.priority === 'Critical' ? 'priority-critical' : (task.priority === 'Ridicat' ? 'priority-ridicat' : (task.priority === 'IT Dep.' ? 'priority-it' : 'priority-mediu'));
                const usersOpts = `<option value="">- Neasignat -</option>` + teamUsers.map(u => `<option value="${u.email}" ${task.assignedTo === u.email ? 'selected' : ''}>${u.email.split('@')[0]}</option>`).join('');
                
                // Construim lista de opțiuni pentru Status
                const allStat = getAllStatuses();
                let statusOptions = allStat.map(s => `<option value="${s}" ${task.status === s ? 'selected' : ''}>${s}</option>`).join('');
                statusOptions += `<option disabled>──────────</option><option value="_CUSTOM_">+ Adaugă custom...</option>`;
                
                const taskStatusColor = getStatusColor(task.status || 'Not Started');

                boardHtml += `
                    <div class="board-task-row">
                        <input type="text" class="board-input" value="${task.name}" onchange="updateTask(${currentBoard.id}, ${subgroup.id}, ${task.id}, 'name', this.value)">
                        
                        <select class="board-input" onchange="updateTask(${currentBoard.id}, ${subgroup.id}, ${task.id}, 'assignedTo', this.value)">${usersOpts}</select>
                        
                        <select class="monday-status" style="background-color: ${taskStatusColor};" onchange="handleStatusChange(${currentBoard.id}, ${subgroup.id}, ${task.id}, this.value)">
                            ${statusOptions}
                        </select>
                        
                        <select class="board-input ${pClass}" style="border:none;" onchange="updateTask(${currentBoard.id}, ${subgroup.id}, ${task.id}, 'priority', this.value)">
                            <option value="Mediu" ${task.priority === 'Mediu'?'selected':''} style="background:var(--color-background); color:var(--color-text);">Mediu</option>
                            <option value="Ridicat" ${task.priority === 'Ridicat'?'selected':''} style="background:var(--color-background); color:var(--color-text);">Ridicat</option>
                            <option value="Critical" ${task.priority === 'Critical'?'selected':''} style="background:var(--color-background); color:var(--color-text);">Critical</option>
                            <option value="IT Dep." ${task.priority === 'IT Dep.'?'selected':''} style="background:var(--color-background); color:var(--color-text);">IT Dep.</option>
                        </select>
                        
                        <input type="number" step="0.5" class="board-input" value="${task.timeTracking}" onchange="updateTask(${currentBoard.id}, ${subgroup.id}, ${task.id}, 'timeTracking', this.value)">
                        <input type="number" class="board-input" value="${task.costFix}" onchange="updateTask(${currentBoard.id}, ${subgroup.id}, ${task.id}, 'costFix', this.value)">
                        
                        <div style="font-family: monospace; font-size: 13px;">${totalCost.toFixed(2)} Lei</div>
                        <div style="font-size: 11px; color: var(--color-text-secondary);">${task.lastUpdated}</div>
                        
                        <div style="display:flex; gap:8px; justify-self:center; align-items:center;">
                            <button onclick="openTaskModal(${currentBoard.id}, ${subgroup.id}, ${task.id})" style="background:none; border:none; cursor:pointer; color:var(--color-primary); display:flex; align-items:center; gap:2px;" title="Comentarii & Detalii">
                                <i data-lucide="message-square" style="width:16px; height:16px;"></i> 
                                ${task.comments && task.comments.length > 0 ? `<span style="font-size: 10px; font-weight: bold;">(${task.comments.length})</span>` : ''}
                            </button>
                            <button onclick="deleteTask(${currentBoard.id}, ${subgroup.id}, ${task.id})" style="background:none; border:none; cursor:pointer; color:var(--color-error);"><i data-lucide="trash-2" style="width:16px; height:16px;"></i></button>
                        </div>
                    </div>
                `;
            });

            // Rândul de adăugare task nou apare doar dacă nu ai pus niciun filtru
            if (!filterPerson && !searchQuery) {
                boardHtml += `
                    <div class="add-task-row">
                        <input type="text" id="newTaskInput_${subgroup.id}" class="board-input" placeholder="+ Adaugă un task nou în ${subgroup.name}..." style="max-width: 400px;" onkeypress="if(event.key === 'Enter') addTask(${currentBoard.id}, ${subgroup.id})">
                        <button class="btn btn--primary btn--sm" onclick="addTask(${currentBoard.id}, ${subgroup.id})"><i data-lucide="plus"></i> Adaugă</button>
                    </div>
                `;
            }
            boardHtml += `</div> `; // End subgroup
        });
        
        boardHtml += `</div> `;
        displayArea.innerHTML = boardHtml;
    }

    lucide.createIcons();
}

function verifyDatabaseIntegrity() {
    let changed = false;
    boards.forEach(board => {
        board.subgroups.forEach(subgroup => {
            subgroup.tasks.forEach(task => {
                if (task.assignedTo) {
                    const assignedUser = users.find(u => u.email === task.assignedTo);
                    
                    // Condiția de invaliditate: userul nu mai exista, SAU e simplu user si nu mai are acces la board-ul acesta
                    if (!assignedUser || (assignedUser.role !== 'admin' && assignedUser.allowedBoards && !assignedUser.allowedBoards.includes(board.id))) {
                        task.assignedTo = ''; // Anulăm asignarea
                        changed = true;
                    }
                }
            });
        });
    });

    if (changed) {
        console.log("Database Integrity Check: S-au curățat utilizatorii fantomă.");
        saveData(); // Salvăm curățenia în LocalStorage
    }
}

// --- FILTRE ȘI STATUSURI CUSTOM ---
let filterPerson = '';
let searchQuery = '';
let sortAsc = true;
let customStatuses = JSON.parse(localStorage.getItem('planner_custom_statuses')) || [];

const defaultStatuses = ['Not Started', 'Working on it', 'Stuck', 'Done', 'Waiting for review', 'IT Dep.', 'Need Help'];

function getAllStatuses() {
    return [...defaultStatuses, ...customStatuses];
}

function getStatusColor(status) {
    const colors = {
        'Done': '#00c875',
        'Working on it': '#fdab3d',
        'Stuck': '#e2445c',
        'Not Started': '#c4c4c4',
        'IT Dep.': '#0086c0',
        'Need Help': '#ff642e',
        'Waiting for review': '#579bfc'
    };
    return colors[status] || '#784bd1'; // Mov default pentru orice status custom
}

function setFilterPerson(email) { filterPerson = email; renderApp(); }
function setSearchQuery(query) { searchQuery = query.toLowerCase(); renderApp(); }
function toggleSort() { sortAsc = !sortAsc; renderApp(); }

// Funcție care gestionează selecția de status (și adăugarea unuia custom)
function handleStatusChange(boardId, subgroupId, taskId, value) {
    if (value === '_CUSTOM_') {
        const newStatus = prompt("Introdu numele noului status (Ex: În Așteptare Client):");
        if (newStatus && newStatus.trim()) {
            const cleanStatus = newStatus.trim();
            if (!customStatuses.includes(cleanStatus) && !defaultStatuses.includes(cleanStatus)) {
                customStatuses.push(cleanStatus);
                localStorage.setItem('planner_custom_statuses', JSON.stringify(customStatuses));
            }
            updateTask(boardId, subgroupId, taskId, 'status', cleanStatus);
        } else {
            renderApp(); // Refresh ca să reseteze vizual dropdown-ul
        }
    } else {
        updateTask(boardId, subgroupId, taskId, 'status', value);
    }
}

document.addEventListener('DOMContentLoaded', checkAuthStatus);