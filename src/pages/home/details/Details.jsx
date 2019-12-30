import React, { useEffect, useState, useCallback} from 'react'
import get from '../../../http/http.js'
import { DetailsWrap, ContentWrap, ListWrap, VideoWrap } from './styledDetails'

export default function Details(props) {
  const [data, setData] = useState()
  const [command_data, setCommandDate] = useState()
  const [flag, setFlag] = useState(true)
  const loadData = useCallback(async (id, url) => {
    return await get({
      url,
      params: {
        group_id: id
      }
    })
  }, [])
  const loadCommandData = useCallback(async (id) => {
    return await get({
      url: `/ajax/related/open/${id}/`,
      params: {
        site_id: 5000726,
        code_id: 900246129,
        num: 20,
        parent_rid: 46780841577080924372,
        page_type: 'article',
      }
    })
  }, [])

  useEffect(() => {
    (async function() {
      let result = await loadData(props.match.params.id, '/api/motor/m/article/detail')
      setData(result)
      let command_result = await loadCommandData(props.match.params.id)
      setCommandDate(command_result);
    })()
  }, [props.match.params.id, loadData, setData, loadCommandData])

  return (
    <DetailsWrap >
      {
        data ? 
        <> 
        {
           data.article_type === 1?
          <>
             <ContentWrap flag={flag}>
              <div>
              {
                data.title
              }
              </div>
              <h6>{data.source}</h6>
              <div dangerouslySetInnerHTML={{__html:data.content}} />
              <span onClick={() => {setFlag(false)}}>点击展开剩下75%</span>
          </ContentWrap>
           <ListWrap>
           <h5>相关阅读</h5>
           {
           command_data && command_data.map((value) => {
               return (
                 <section key={value.id}>
                     <img src={value.image_list[0].url} alt=""/>
                     <div>
                       <p>{value.title}</p>
                       <span>{value.stats.comment_count}条评论</span>
                     </div>
                 </section>
 
               )
             })
           }
         </ListWrap>
          </> : 
          <>
          <VideoWrap>
            <div>
              <img src={`https://sf6-ttcdn-tos.pstatp.com/img/${data.video_info.cover_uri}~tplv-resize:480:0.png`} alt=""/>
            </div>
            <div>
              <p>{data.title}</p>
              <span>{data.source}</span>
              <span>23万次播放</span>
            </div>
            <div>
              <span>相关车型</span>
              <span>数据来源懂车帝App</span>
              <div>
                <img src={data.car_card.cover} alt=""/>
                <div>
                  <span>{data.car_card.series_name}</span>
                  <span>{data.car_card.agent_price}</span>
                  <span>指导价：{data.car_card.offical_price}</span>
                </div>
                <button>询底价</button>
              </div>
            </div>
          </VideoWrap>
           <ListWrap>
           <h5>相关阅读</h5>
           {
           command_data && command_data.map((value) => {
               return (
                 <section key={value.id}>
                     <img src={value.video ? value.video.cover_image_url: value.image_list[0].url} alt=""/>
                     <div>
                       <p>{value.title}</p>
                       <span>{value.stats.comment_count}条评论</span>
                     </div>
                 </section>
 
               )
             })
           }
         </ListWrap>
          </>
        }
        </>
        : null
         
      }
    </DetailsWrap>
  )
}
