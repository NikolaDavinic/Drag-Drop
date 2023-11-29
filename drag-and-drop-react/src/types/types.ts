export type TaskCarProps = {
  item: DataType;
  index: number;
};

export type DataType = {
  id: string;
  Task: string;
  Due_Date: string;
}

export type ColumnsType = {
  id: string;
  title: string;
  items: Array<DataType>;
}