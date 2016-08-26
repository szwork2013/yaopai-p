import Reflux from 'reflux'

import { postStar } from '../../HttpFactory'
import { API_URL } from '../../api'

const getTagConfig = (type) => {
  const tagConfig = {
    mote: {
      url: `${API_URL}?api=MoteAlbumsTag.List`,
      key: `mote`,
    }
  }

  return tagConfig[type]
}


const TagListAction = Reflux.createActions({
  get: { children: ['success', 'failure'] },
})

TagListAction.get.listen(function(type) {
  const self = this
  if (getTagConfig[type]) {
    const { url, key } = getTagConfig[type]
    postStar(url, {
      fields: 'Id,Name,Pinyin',
      /* 以下表示不分页 */
      pageSize: 0, pageIndex: 0,
    }, (data) => {
      self.success(type, data.Result.map(record => ({
        id: record.Id,
        name: record.Name,
        phonics: record.Pinyin,
      })))
    }, self.failure)
  } else {
    console.error(`Unexpected tag type: [${type}]. Please check your param for [TagListAction.get].`)
  }
})

export default TagListAction
