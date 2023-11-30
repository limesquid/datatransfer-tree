export type TreeFileEntry = Pick<FileSystemEntry, 'filesystem' | 'fullPath' | 'name'> & {
  type: 'file';
  file: File;
};

export type TreeDirectoryEntry = {
  type: 'directory';
  name: string;
  entries: TreeEntry[];
};

export type TreeEntry = TreeDirectoryEntry | TreeFileEntry;
