module.exports = {
  helpers: {
    kebab_to_camel: function(word) {
      return word.replace(/-./g, function(s) {
        return s.charAt(1).toUpperCase()
      })
    }
  },
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
    test: {
      type: 'confirm',
      message: 'Setup unit tests with Jest?'
    },
    doc: {
      type: 'confirm',
      message: 'Setup documentation with ESDoc?'
    }
  },
  filters: {
    'test/**/*': 'test',
    '.esdoc.json': 'doc'
  }
}