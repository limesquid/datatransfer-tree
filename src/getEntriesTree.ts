import { isDirectory, isFile, readDirectoryEntries, readFileEntryFile } from './lib';
import type { TreeDirectoryEntry, TreeEntry, TreeFileEntry } from './types';

const getEntriesTree = async (entries: (FileSystemEntry | null)[]): Promise<TreeEntry[]> => {
  const filesEntries = entries.filter(isFile);
  const directoriesEntries = entries.filter(isDirectory);

  const filesPromise = Promise.all(
    filesEntries.map<Promise<TreeFileEntry>>(async (fileEntry) => {
      const file = await readFileEntryFile(fileEntry);

      return {
        file: file,
        filesystem: fileEntry.filesystem,
        fullPath: fileEntry.fullPath,
        name: fileEntry.name,
        type: 'file',
      };
    }),
  );

  const directoriesPromise = Promise.all(
    directoriesEntries.map<Promise<TreeDirectoryEntry>>(async (directory) => {
      const fileSystemDirectoryEntries = await readDirectoryEntries(directory);
      const entries = await getEntriesTree(fileSystemDirectoryEntries);

      return {
        entries,
        name: directory.name,
        type: 'directory',
      };
    }),
  );

  const [directories, files] = await Promise.all([directoriesPromise, filesPromise]);

  return [...directories, ...files];
};

export default getEntriesTree;
