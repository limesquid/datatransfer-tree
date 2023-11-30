const isFile = (entry: FileSystemEntry | null): entry is FileSystemFileEntry =>
  Boolean(entry && entry.isFile);

export default isFile;
