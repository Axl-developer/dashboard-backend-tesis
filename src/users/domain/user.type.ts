
type userProject = {
    id: number,
    nameProject: string,
    descriptionProject: string,
    dateStartProject: Date,
    dateEndProject: Date,
    percentProject: number
}

type projectTask = {
    customerProjectTask: string,
    namePojectTask: string,
}

interface userTasks {
    id: number,
    nameTask: string,
    descriptionTask: string,
    dateStartTask: Date,
    dateEndTask: Date,
    percentTask: number,
    projectTask: projectTask
}

interface user {
  name: string,
  position: string,
  institution: string,
  phone: string,
  email: string,
  age: number,
  dateStart: Date,
  dateEnd: Date|string,
  skills: string[],
  projectStatistics:{
    total: number,
    actives: number,
    percent: number
  },
  listProjects: userProject[],
  listTasks: userTasks[]
}
