import request from 'superagent'

const rootUrl = '/api/v1'

export function getTrees () {
  return request.get('/api/v1/trees')
    .then(res => {
      return res.body
    })
}
