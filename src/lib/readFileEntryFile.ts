const readFileEntryFile = async (fileEntry: FileSystemFileEntry): Promise<File> =>
  new Promise<File>((resolve, reject) => {
    fileEntry.file(resolve, reject);
  });

export default readFileEntryFile;
