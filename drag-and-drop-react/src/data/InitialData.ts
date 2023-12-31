import { ColumnsType, DataType } from "../types/types";

export const data: Array<DataType> = [
  {
    id: "1",
    Task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent.",
    // Assigned_To: 'Beltran',
    // Assignee: 'Romona',
    // Status: 'To-do',
    // Priority: 'Low',
    Due_Date: "25-May-2020",
  },
  {
    id: "3",
    Task: "Handle Door Specs",
    // Assigned_To: 'Roman',
    // Assignee: 'Romona',
    // Status: 'To-do',
    // Priority: 'Low',
    Due_Date: "27-May-2020",
  },
  {
    id: "2",
    Task: "Fix Styling",
    // Assigned_To: 'Dave',
    // Assignee: 'Romona',
    // Status: 'To-do',
    // Priority: 'Low',
    Due_Date: "26-May-2020",
  },
  {
    id: "4",
    Task: "morbi",
    // Assigned_To: 'Gawen',
    // Assignee: 'Kai',
    // Status: 'Done',
    // Priority: 'High',
    Due_Date: "23-Aug-2020",
  },
  {
    id: "5",
    Task: "proin",
    // Assigned_To: 'Bondon',
    // Assignee: 'Antoinette',
    // Status: 'In Progress',
    // Priority: 'Medium',
    Due_Date: "05-Jan-2021",
  },
];

export const columnsFromBackend: Array<ColumnsType> = [
  {
    id: "1",
    title: "To-do",
    items: data,
  },
  {
    id: "2",
    title: "In Progress",
    items: [],
  },
  {
    id: "3",
    title: "Done",
    items: [],
  },
];
