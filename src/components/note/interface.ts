
export interface INoteProps {
    name: string;
    content: string;
    creationTime: Date;
    id: string;
}

export interface INotesListProps {
    notes: INoteProps[]
}