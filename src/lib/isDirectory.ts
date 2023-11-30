const isDirectory = (entry: FileSystemEntry | null): entry is FileSystemDirectoryEntry =>
  Boolean(entry && entry.isDirectory);

export default isDirectory;
