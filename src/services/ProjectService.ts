type Project = {
    id: number;
    title: string;
    description: string;
};

const projects: Project[] = [
    { id: 1, title: 'Portfolio Website', description: 'Um site pessoal feito com React.' },
    { id: 2, title: 'API RESTful', description: 'Back-end com Node.js e TypeScript.' }
];

export const getProjects = (): Project[] => projects;

export const getProject = (id: number): Project | undefined => 
    projects.find((p) => p.id === id);