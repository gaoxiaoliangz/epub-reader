import urljoin from 'url-join'

export default (): string => {
  if (!process.env.DB_USER) {
    return urljoin(`${process.env.DB_PROTOCOL}://${process.env.DB_HOST}:${process.env.DB_PORT}`, process.env.DB_NAME)
  }

  return urljoin(`${process.env.DB_PROTOCOL}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}`, process.env.DB_NAME)
}
