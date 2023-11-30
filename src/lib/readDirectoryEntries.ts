const readDirectoryEntries = async (
  directory: FileSystemDirectoryEntry,
): Promise<FileSystemEntry[]> =>
  new Promise<FileSystemEntry[]>((resolve, reject) => {
    directory.createReader().readEntries(resolve, reject);
  });

export default readDirectoryEntries;
