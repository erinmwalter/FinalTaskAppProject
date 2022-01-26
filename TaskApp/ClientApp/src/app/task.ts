export interface Task {
    taskId:      number;
    tmName:      string;
    taskName:    string;
    description: string;
    dueDate:     string;
    isCompleted: boolean;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toTask(json: string): Task {
        return JSON.parse(json);
    }

    public static taskToJson(value: Task): string {
        return JSON.stringify(value);
    }

    public static taskArrayToJson(value: Task[]): string {
        return JSON.stringify(value);
    }

    public static toTaskArray(json: string): Task[] {
        return JSON.parse(json);
    }

    
}