function join(...args) {
  return args.reduce((acc, currentVal) => acc.concat(` ${currentVal}`), '');
}

export default join;
