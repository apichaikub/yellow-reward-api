export default Object.freeze({
  ENUM: {
    'USER': 'USER',
    'ADMIN': 'ADMIN',
  },
  get values() {
    return Object.values(this.ENUM)
  },
})
