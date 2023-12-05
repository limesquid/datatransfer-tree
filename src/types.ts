export type FileNode = Pick<FileSystemEntry, 'filesystem' | 'fullPath' | 'name'> & {
  type: 'file';
  file: File;
};

export type DirectoryNode = {
  type: 'directory';
  name: string;
  entries: Node[];
};

export type Node = DirectoryNode | FileNode;
