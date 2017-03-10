import urljoin from 'url-join'

export default () => {
  return urljoin(`${process.env.DB_PROTOCOL}://${process.env.DB_HOST}:${process.env.DB_PORT}`, process.env.DB_NAME) as string
}
