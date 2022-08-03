(()=>{"use strict";class e{static removeTask(e){e.target.parentNode.remove()}static displayProjectList=e=>{this.clearProjectContainer();for(let t=0;t<e.length;t++){const s=document.createElement("div");s.classList="project",s.dataset.indexNumber=t,s.innerHTML=`<p class="project-name">${e[t].name}</p><div class="remove-project">+</div>`,document.querySelector(".projects-container").appendChild(s)}};static clearProjectContainer=()=>{document.querySelector(".projects-container").innerHTML=""};static clearProjectContent=()=>{document.querySelector(".project-data").innerHTML=""};static displayProjectTasks=e=>{document.querySelector(".content h1").textContent=e.name,this.clearProjectContent();for(let t=0;t<e.taskList.length;t++){const s=document.createElement("div");s.classList="task",s.dataset.indexNumber=t,s.innerHTML=`<p class="task-title">${e.taskList[t].title}</p><p class="task-description">${e.taskList[t].description}</p><p class="task-due">${e.taskList[t].dueDate}</p><p class="task-priority">${e.taskList[t].priority}</p><div class="remove-task">+</div>`,document.querySelector(".project-data").appendChild(s)}};static openTaskForm=()=>{document.querySelector(".bg-modal").style.display="flex",document.querySelector(".new-task-popup").style.display="flex"};static closeForm=e=>{document.querySelector(".bg-modal").style.display="none",e.target.parentNode.style.display="none"};static openProjectForm=()=>{document.querySelector(".bg-modal").style.display="flex",document.querySelector(".new-project-popup").style.display="flex"}}class t{constructor(e){this.name=e,this.taskList=[]}addTask(e){this.taskList.push(e)}removeTask(e){this.taskList.splice(e,1)}}class s{constructor(e,t,s,o){this.title=e,this.description=t,this.dueDate=s,this.priority=o}}class o{constructor(e){this.controller=e}init(){document.querySelectorAll(".new-task-button").forEach((t=>{t.addEventListener("click",e.openTaskForm)})),document.getElementById("new-project-button").addEventListener("click",e.openProjectForm),document.querySelectorAll(".close-popup").forEach((t=>{t.addEventListener("click",e.closeForm)})),document.getElementById("task-form-submission").addEventListener("click",this.controller.createTask),document.getElementById("project-form-submission").addEventListener("click",this.controller.createProject)}initRemoveTaskListener(){document.querySelectorAll(".remove-task").forEach((e=>{e.addEventListener("click",this.controller.deleteTask)}))}initRemoveProjectListener(){document.querySelectorAll(".remove-project").forEach((e=>{e.addEventListener("click",this.controller.deleteProject)}))}initProjectSelectionListener(){document.querySelectorAll(".project-name").forEach((e=>{e.addEventListener("click",this.controller.setSelectedProject)}))}}const c=new t("Default"),r=[];r.push(c);let i=c;const n=new class{constructor(e,t){this.projectList=e,this.selectedProject=t,this.events=new o(this)}setSelectedProject=t=>{const s=t.target.parentNode.dataset.indexNumber;this.selectedProject=this.projectList[s],e.displayProjectTasks(this.selectedProject),console.log(this.selectedProject)};removeProjectFromList=e=>{this.projectList.splice(e,1)};createProject=s=>{s.preventDefault();const o=document.getElementById("name").value;this.projectList.push(new t(o)),e.displayProjectList(this.projectList),this.events.initRemoveProjectListener(),this.events.initProjectSelectionListener()};deleteProject=t=>{const s=t.target.parentNode.dataset.indexNumber;this.removeProjectFromList(s),e.displayProjectList(this.projectList),this.events.initRemoveProjectListener(),this.events.initProjectSelectionListener()};createTask=t=>{t.preventDefault();const o=document.getElementById("title").value,c=document.getElementById("description").value,r=document.getElementById("due").value,i=document.getElementById("priority").value,n=new s(o,c,r,i);this.selectedProject.addTask(n),e.displayProjectTasks(this.selectedProject),this.events.initRemoveTaskListener()};deleteTask=t=>{const s=t.target.parentNode.dataset.indexNumber;this.selectedProject.removeTask(s),e.displayProjectTasks(this.selectedProject),this.events.initRemoveTaskListener()}}(r,i);new o(n).init(),e.displayProjectTasks(i),e.displayProjectList(r)})();