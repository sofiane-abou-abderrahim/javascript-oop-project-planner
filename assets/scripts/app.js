class Tooltip {}

class ProjectItem {
  constructor(id) {
    this.id = id;
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(new ProjectItem(prjItem.id));
    }
    console.log(this.projects);
    // we got an array with objects now, not DOM node objects but simpler objects which in the end just have an ID property
  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectList('active');
    const finishedProjectsList = new ProjectList('finished');
  }
}

App.init();
