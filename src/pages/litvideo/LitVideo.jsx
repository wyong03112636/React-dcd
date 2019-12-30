import React from 'react'

export default function LitVideo() {
  return (
    
      <iframe style={{width: '100%', height: '100%'}} src="/map.html" frameBorder="0" title="iframe"></iframe>
    
  )
}
// import React, {useState, useEffect} from 'react'

// export default function LitVideo() {
  
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let itemr = setTimeout(() => {
//       document.title = count
//       setCount(count => count + 1)
//       console.log(count)
//     }, 1000)
//   }, [])
  
//   useEffect(() => {
//     console.log(count + '---------------')
//   }, [count])

//   return (
//     <div>
      
//     </div>
//   )
// }

