export function pathClean(path: string) {
  return path.split('/').filter(Boolean).join('/');
}
